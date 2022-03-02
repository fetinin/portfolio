import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";

import indexCss from "./styles/index.css";
import bootstrapCss from "bootstrap/dist/css/bootstrap.min.css";

export const meta: MetaFunction = () => {
  return { title: "Denis Fetinin | Software developer" };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://pro.fontawesome.com/releases/v5.10.0/css/all.css",
    },
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css",
    },
    {
      rel: "stylesheet",
      href: indexCss,
    },
    {
      rel: "stylesheet",
      href: bootstrapCss,
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
      </body>
    </html>
  );
}
