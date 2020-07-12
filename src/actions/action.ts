import { TodoProps } from "../components/Todo";

export type TodoAction =
  | { type: "INIT_TODO"; todos: TodoProps[] }
  | { type: "ADD_TODO"; text: string }
  | { type: "REMOVE_TODO"; index: number }
  | { type: "CHECK_TODO"; index: number };

export const initTodo = (todos: TodoProps[]): TodoAction => {
  return {
    type: "INIT_TODO",
    todos: todos,
  };
};

export const addTodo = (text: string): TodoAction => {
  return {
    type: "ADD_TODO",
    text: text,
  };
};

export const removeTodo = (index: number): TodoAction => {
  return {
    type: "REMOVE_TODO",
    index: index,
  };
};

export const checkTodo = (index: number): TodoAction => {
  return {
    type: "CHECK_TODO",
    index: index,
  };
};
