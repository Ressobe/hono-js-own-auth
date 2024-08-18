import { Hono } from "hono";
import { validator } from "hono/validator";
import { LoginSchema, RegisterSchema } from "./schemas";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";

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
      return c.html(<LoginPage errors={errors} />);
    }
    return parsed.data;
  }),
  (c) => {
    const validationResult = c.req.valid("form");
    const { email, password } = validationResult;
    return c.json({ message: "Created!" }, 201);
  },
);

app.post(
  "/register",
  validator("form", (value, c) => {
    console.log(value);
    const parsed = RegisterSchema.safeParse(value);
    if (!parsed.success) {
      const errors = parsed.error.format();
      return c.html(<RegisterPage errors={errors} />);
    }
    return parsed.data;
  }),
  (c) => {
    const { name, email, password } = c.req.valid("form");
    return c.json(
      {
        message: "Created!",
      },
      201,
    );
  },
);

export default app;
