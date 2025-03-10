import { type FC, type FormEvent, useState } from "react";
import type { ITodo, TSetTodo } from "./types/todo";
import { createId } from "./utils/todo";
import { todoStorage } from "~/utils/Storage";

const TextArea: FC<{ onSetTodo: TSetTodo }> = ({ onSetTodo }) => {
  const [text, setText] = useState<string>("");

  const onSetTodoHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentTodo: ITodo = {
      id: createId(),
      text,
      status: false,
      time: new Date(),
    };
    onSetTodo((prevTodo) => [...prevTodo, currentTodo]);
    // --------------------------
    todoStorage.setData(currentTodo);
    // --------------------------
    setText("");
  };

  return (
    <form onSubmit={onSetTodoHandler}>
      <div className="w-full mb-4 mt-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
          <label htmlFor="comment" className="sr-only">
            Your notice
          </label>
          <textarea
            id="comment"
            rows={4}
            className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Write a comment..."
            onChange={(event) => setText(event.target.value)}
            value={text}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600 border-gray-200">
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Add todo
          </button>
        </div>
      </div>
    </form>
  );
};

export default TextArea;
