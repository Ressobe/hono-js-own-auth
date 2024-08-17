import { Hono } from "hono";
import { LoginForm } from "./components/login-form";
import { RegisterForm } from "./components/register-form";
import { validator } from "hono/validator";
import { Layout } from "./components/layout";
import { LoginSchema, RegisterSchema } from "./schemas";

const app = new Hono();

app.get("/", async (c) => {
  return c.html("home");
});

app.get("/login", async (c) => {
  return c.html(
    <Layout>
      <LoginForm />
    </Layout>,
  );
});

app.get("/register", async (c) => {
  return c.html(
    <Layout>
      <RegisterForm />
    </Layout>,
  );
});

app.post(
  "/login",
  validator("form", (value, c) => {
    console.log(value);
    const parsed = LoginSchema.safeParse(value);
    if (!parsed.success) {
      return c.text("Invalid!", 401);
    }
    return parsed.data;
  }),
  (c) => {
    const { email, password } = c.req.valid("form");

    return c.json(
      {
        message: "Created!",
      },
      201,
    );
  },
);

app.post(
  "/register",
  validator("form", (value, c) => {
    console.log(value);
    const parsed = RegisterSchema.safeParse(value);
    if (!parsed.success) {
      return c.text("Invalid!", 401);
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
