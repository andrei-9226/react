import TodoList from "~/components/todolist/todolist";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ToDo List" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <TodoList />;
}
