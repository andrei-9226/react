import type { ITodo } from "~/components/todolist/types/todo";

export const enum STORAGES {
  TODO = "react_route_app",
}

class Storage {
  private nameStorage: string;
  constructor(nameStorage: string) {
    this.nameStorage = nameStorage;
  }

  getData(): ITodo[] {
    const JSONdata = window.localStorage.getItem(this.nameStorage);
    try {
      if (JSONdata) {
        const data: ITodo[] = JSON.parse(JSONdata);
        return data;
      }
      return [];
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  setData(data: ITodo) {
    const dataStorage = this.getData();
    const allData = dataStorage ? [...dataStorage, data] : [data];
    window.localStorage.setItem(this.nameStorage, JSON.stringify(allData));
  }
}

const todoStorage = new Storage(STORAGES.TODO);

export { todoStorage };
