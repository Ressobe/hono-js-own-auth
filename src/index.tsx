import { Hono } from "hono";
import { validator } from "hono/validator";
import { LoginSchema, RegisterSchema } from "./schemas";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { createUser, getUserByEmail } from "./database/user";
import bcrypt from "bcryptjs";

const app = new Hono();

app.get("/", async (c) => {
  return c.html("home");
});

app.get("/login", async (c) => {
  return c.html(<LoginPage />);
});

app.get("/register", async (c) => {
  return c.html(<RegisterPage />);
});

app.post(
  "/login",
  validator("form", (value, c) => {
    const parsed = LoginSchema.safeParse(value);
    if (!parsed.success) {
      const errors = parsed.error.format();
      return c.html(<LoginPage zodErrors={errors} values={value} />);
    }

    return parsed.data;
  }),
  async (c) => {
    const validationResult = c.req.valid("form");
    const { email, password } = validationResult;

    const existingUser = await getUserByEmail(email);
    if (!existingUser) {
      return c.html(
        <LoginPage
          customError="Invalid credentials"
          values={validationResult}
        />,
      );
    }

    const isPasswordsMatch = await bcrypt.compare(
      password,
      existingUser.password,
    );

    if (!isPasswordsMatch) {
      return c.html(
        <LoginPage
          customError="Invalid credentials"
          values={validationResult}
        />,
      );
    }

    return c.redirect("/login");
  },
);

app.post(
  "/register",
  validator("form", (value, c) => {
    const parsed = RegisterSchema.safeParse(value);
    if (!parsed.success) {
      const errors = parsed.error.format();
      return c.html(<RegisterPage zodErrors={errors} values={value} />);
    }
    return parsed.data;
  }),
  async (c) => {
    const validationResult = c.req.valid("form");
    const { name, email, password } = validationResult;

    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return c.html(
        <RegisterPage
          customError="Email already is taken by other user!"
          values={validationResult}
        />,
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser(name, email, hashedPassword);

    return c.redirect("/register");
  },
);

export default app;
