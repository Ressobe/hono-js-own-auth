import "dotenv/config";
import bcrypt from "bcryptjs";
import { Hono } from "hono";
import { validator } from "hono/validator";
import { LoginSchema, RegisterSchema } from "./schemas";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { createUser, getUserByEmail } from "./database/user";
import { HomePage } from "./pages/home";
import { generateAccessToken, generateRefreshToken } from "./auth/jwt";
import { getCookie, setCookie } from "hono/cookie";
import * as jwt from "jsonwebtoken";
import { getToken } from "./database/refreshToken";

const app = new Hono();

app.get("/", async (c) => {
  return c.html(<HomePage />);
});

app.get("/login", async (c) => {
  return c.html(<LoginPage />);
});

app.get("/register", async (c) => {
  return c.html(<RegisterPage />);
});

app.use("/protected", async (c, next) => {
  const accessToken = getCookie(c, "accessToken");
  const refreshToken = getCookie(c, "accessToken");

  if (!accessToken) {
    return c.redirect("/");
  }
  if (!refreshToken) {
    return c.redirect("/");
  }

  try {
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET!);
    if (typeof payload === "string") {
      return c.redirect("/");
    }
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      const existingToken = await getToken(refreshToken);
      if (!existingToken) {
        return c.redirect("/");
      }

      const newAccessToken = generateAccessToken(payload.userId);
      const newRefreshToken = generateRefreshToken(payload.userId);

      setCookie(c, "accessToken", newAccessToken, { httpOnly: true });
      setCookie(c, "refreshToken", newRefreshToken, { httpOnly: true });

      return c.redirect("/");
    }
  }

  await next();
});

app.get("/protected", async (c) => {
  return c.html("You are log in!");
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

    const accessToken = generateAccessToken(existingUser.id);
    const refreshToken = generateRefreshToken(existingUser.id);

    setCookie(c, "accessToken", accessToken, { httpOnly: true });
    setCookie(c, "refreshToken", refreshToken, { httpOnly: true });

    return c.redirect("/protected");
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
