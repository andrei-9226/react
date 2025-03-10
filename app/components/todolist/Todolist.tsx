"use client";
import { useEffect, useState } from "react";
import TextArea from "./TextArea";
import { type ITodo } from "./types/todo";
import TodoItem from "./TodoItem";
import { todoStorage } from "~/utils/Storage";

const TodoList = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  useEffect(() => {
    const todos = todoStorage.getData();
    setTodoList(todos);
  }, []);

  return (
    <div className="container mx-auto py-2">
      <h1 className="text-2xl text-center color-gray">Todo List</h1>
      <TextArea onSetTodo={setTodoList} />
      {todoList.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
