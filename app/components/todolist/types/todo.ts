import type { Dispatch, SetStateAction } from "react";

export interface ITodo {
  id: string;
  text: string;
  status: boolean;
  time: Date;
}

export type TSetTodo = Dispatch<SetStateAction<ITodo[]>>;
