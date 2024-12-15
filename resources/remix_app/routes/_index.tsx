import { useLoaderData } from "react-router";
import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/_index";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


export async function loader({ context }: Route.LoaderArgs) {
  const service = await context.make('hello_service')

  return {
    message: service.getMessage(),
  }
}

export default function Home() {
  const { message } = useLoaderData<typeof loader>()
  return <Welcome message={message} />;
}
