import { Links, LiveReload, Meta, Outlet } from "remix";
import type { MetaFunction } from "remix";
import styles from "./styles/tailwind.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => {
  return { title: "Tristan Blackwell" };
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
      <body className="bg-dark-blue">
        {process.env.NODE_ENV === "development" && <LiveReload />}
        <Outlet />
      </body>
    </html>
  );
}
