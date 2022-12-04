import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

// Styles =>
import superKeyStyles from "superkey/styles.css";
import Layout from "./layout";
import tailwindStyles from "./styles/app.css";
import customStyles from "./styles/custom.css";
import prismStyles from "./styles/prism.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: superKeyStyles },
  { rel: "stylesheet", href: customStyles },
  { rel: "stylesheet", href: tailwindStyles },
  { rel: "stylesheet", href: prismStyles },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Superkey",
  description:
    "A stylized command palette built with HeadlessUI & Tailwind CSS.",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="font-sans text-white bg-customDark">
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
