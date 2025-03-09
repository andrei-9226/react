import type { ITodo } from "./types/todo";
import { formateDateTime } from "./utils/todo";

const classListTodo = ["mb-4", "border", "border-blue-200", "rounded-lg"];

const TodoItem = ({ id, text, status, time }: ITodo) => {
  const timeTodo = formateDateTime(time);

  return (
    <div className={"mb-4 border border-blue-200 shadow rounded-lg"}>
      <p className="p-5 text-base">{text}</p>
      <time
        className="p-2 block text-end text-sm text-gray-600"
        dateTime={timeTodo}
      >
        {timeTodo}
      </time>
    </div>
  );
};

export default TodoItem;
