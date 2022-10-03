import bootstrapCss from 'bootstrap/dist/css/bootstrap.min.css';

import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { LinksFunction, MetaFunction } from '@remix-run/react/dist/routeModules';

import indexCss from './styles/index.css';
import navbarCss from './styles/navbar.css';

export const meta: MetaFunction = () => {
  const description = "Hey! Welcome to my website where I share my experience and projects 👋";
  return {
    charset: "utf-8",
    description,
    keywords: "Denis Fetinin,Golang developer,Software Developer",
    title: "Denis Fetinin | Software developer",
  };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "fontawsome/all.min.css",
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
    {
      rel: "stylesheet",
      href: navbarCss,
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
        {/* <Navbar /> */}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
        {/* <!-- Cloudflare Web Analytics --> */}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "581ad312b4524b2193b7a7900aa199a3"}'
        ></script>
        {/* <!-- End Cloudflare Web Analytics --> */}
      </body>
    </html>
  );
}
