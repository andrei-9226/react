import { useEffect, useState } from "react";
import TextArea from "./TextArea";
import type { ITodo } from "./types/todo";

const TodoList = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  useEffect(() => {}, []);

  return (
    <div className="container mx-auto py-2">
      <h1 className="text-2xl text-center color-gray">Todo List</h1>
      <TextArea onSetTodo={setTodoList} />
      {todoList.map((todo) => (
        <p key={todo.id}>{todo.text}</p>
      ))}
    </div>
  );
};

export default TodoList;
