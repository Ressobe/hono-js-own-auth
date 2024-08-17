import { PropsWithChildren } from "hono/jsx";
import { Style } from "hono/css";
import { mainContainerClass, resetCSS } from "../styles/index";

export function Layout({ children }: PropsWithChildren) {
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
