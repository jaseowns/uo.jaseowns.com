import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  LinksFunction,
  LoaderFunction,
  useLoaderData,
  useCatch
} from "remix";
import type { MetaFunction } from "remix";

import stylesUrl from "./styles/global.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export let loader: LoaderFunction = async () => {
  return { date: new Date() };
};


export const meta: MetaFunction = () => {
  return { title: "Jaseowns UO Resources" };
};

function Document({
  children,
  title
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/builder">UO Outlands Template Builder</a></li>
            <li><a href="/outlands/starter-items">Starter Items</a></li>
          </ul>
        </nav>
      </header>



        {children}
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}

      </body>
    </html>
  );
}

// export default function App_new() {
//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width,initial-scale=1" />
//         <Meta />
//         <Links />
//       </head>
//       <body>
//         <header>
//           <nav>
//             <ul>
//               <li><a href="/">Home</a></li>
//               <li><a href="/builder">UO Outlands Template Builder</a></li>
//               <li><a href="/outlands/starter-items">Starter Items</a></li>
//             </ul>
//           </nav>
//         </header>
//         <Outlet />
//         <ScrollRestoration />
//         <Scripts />
//         {process.env.NODE_ENV === "development" && <LiveReload />}
//       </body>
//     </html>
//   );
// }



export default function App() {
  let data = useLoaderData();

  return (
    <Document>
      <ScrollRestoration />
      <Outlet />
      <footer>
        <p><a href="https://twitter.com/jaseowns">Twitter</a> | <a href="https://youtube.com/jaseowns">YouTube</a> | <a href="https://github.com/jaseowns">GitHub</a> | <a href="https://www.patreon.com/jaseowns">Patreon</a></p>
        <p>This page was rendered at {data.date.toLocaleString()}</p>
      </footer>
    </Document>
  );
}

export function CatchBoundary() {
  let caught = useCatch();

  switch (caught.status) {
    case 401:
    case 404:
      return (
        <Document title={`${caught.status} ${caught.statusText}`}>
          <h1>
            {caught.status} {caught.statusText}
          </h1>
        </Document>
      );

    default:
      throw new Error(
        `Unexpected caught response with status: ${caught.status}`
      );
  }
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <Document title="Uh-oh!">
      <h1>App Error</h1>
      <pre>{error.message}</pre>
      <p>
        Replace this UI with what you want users to see when your app throws
        uncaught errors.
      </p>
    </Document>
  );
}

