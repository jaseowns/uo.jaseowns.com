import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import { useLoaderData } from "remix";

import stylesUrl from "../styles/index.css";

export let meta: MetaFunction = () => {
  return {
    title: "Jaseowns Ultima Online Resources",
    description: "Jaseowns.com is the online dumping ground of Jason Ramsey. He's a developer, gamer, husband and father who has been a nerd owning people on the internet since dial up."
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export let loader: LoaderFunction = async () => {
  return { message: "How did you end up here? 😎" };
};

export default function Index() {
  let data = useLoaderData();

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>UO Resources</h2>
      <p>Jaseowns.com is the online dumping ground of Jason Ramsey. He's a developer, gamer, husband and father who has been a nerd owning people on the internet since dial up.</p>
      <p>This portion of the site is dedicated to all things Ultima Online!</p>
      <p>{data.message}</p>
    </div>
  );
}