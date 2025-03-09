import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";

export const createId = () => {
  return uuidv4();
};

export const formateDateTime = (time: Date) => {
  return format(time, "MMMM dd, yyyy HH:mm");
};
