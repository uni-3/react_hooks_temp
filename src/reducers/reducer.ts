import React from "react";

import { TodoAction } from "../actions/action";

interface TodoProps {
  text?: string;
  done: boolean;
}

// TODO anyじゃなくて何を入れれば
interface TodoState {
  todos?: TodoProps[] | [];
}

export const initialState: TodoState = { todos: [] };
/*
export const initialState: TodoState = {
  todos: [{
    text: "",
    done: false,
  }],
};
*/

export const reducer: React.Reducer<TodoState, TodoAction> = (
  state: TodoState,
  action: TodoAction,
) => {
  const stateTodos = state.todos || [];
  console.log("reducer a", action);
  console.log("reducer s", state);
  switch (action.type) {
    case "INIT_TODO":
      return {
        todos: action.todos,
      };
    case "ADD_TODO":
      return {
        todos: [...stateTodos, {
          text: action.text,
          done: false,
        }],
      };
    case "REMOVE_TODO":
      return { todos: stateTodos.filter((_, index) => index != action.index) };

      /*
      const removedTodos = stateTodos.slice();
      removedTodos.splice(action.index, 1);
      return {
        todos: removedTodos,
      };
      */

    case "CHECK_TODO":
      const checkedTodos = stateTodos.slice();
      const done = checkedTodos[action.index].done;
      checkedTodos[action.index].done = !done;
      console.log("check", done);
      console.log("check", checkedTodos);

      return {
        todos: checkedTodos,
      };
    default:
      throw new Error();
  }
};
