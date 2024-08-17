import { Hono } from "hono";
import { LoginForm } from "./components/login-form";
import { PropsWithChildren } from "hono/jsx";
import { css, Style } from "hono/css";
import { RegisterForm } from "./components/register-form";
import { mainContainerClass, resetCSS } from "./components/style";

function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔥</text></svg>"
        />
        <title>Hono Js + JWT Auth</title>
        <Style>{resetCSS}</Style>
      </head>
      <body>
        <main class={mainContainerClass}>{children}</main>
      </body>
    </html>
  );
}

const container = css`
  display: flex;
`;

function LoginRoute() {
  return (
    <Layout>
      <div class={container}>
        <LoginForm />
      </div>
    </Layout>
  );
}

function RegisterRoute() {
  return (
    <Layout>
      <div>
        <RegisterForm />
      </div>
    </Layout>
  );
}

const app = new Hono();

app.get("/", async (c) => {
  return c.html("home");
});

app.get("/login", async (c) => {
  return c.html(<LoginRoute />);
});

app.get("/register", async (c) => {
  return c.html(<RegisterRoute />);
});

app.get("/api/login", async (c) => {
  return c.html("login");
});

app.get("/api/register", async (c) => {
  return c.html("register");
});

export default app;
