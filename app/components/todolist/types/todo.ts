import type { Dispatch, SetStateAction } from "react";

export interface ITodo {
  id: string;
  text: string;
  status: boolean;
  time: Date;
}

export type TSetTodo = Dispatch<SetStateAction<ITodo[]>>;

export const todos: ITodo[] = [
  {
    id: "12",
    text: "first todo",
    status: false,
    //@ts-ignore
    time: 'Mon Mar 10 2025 20:59:55 GMT+0300 (Москва, стандартное время)' as Date,
  },
  {
    id: "34",
    text: "second todo",
    status: false,
    //@ts-ignore
    time: 'Mon Mar 10 2025 20:59:55 GMT+0300 (Москва, стандартное время)' as Date,
  },
  {
    id: "52",
    text: "third todo",
    status: false,
    //@ts-ignore
    time: 'Mon Mar 10 2025 20:59:55 GMT+0300 (Москва, стандартное время)' as Date,
  },
  {
    id: "56",
    text: "fourth todo",
    status: false,
    //@ts-ignore
    time: 'Mon Mar 10 2025 20:59:55 GMT+0300 (Москва, стандартное время)' as Date,
  },
];
