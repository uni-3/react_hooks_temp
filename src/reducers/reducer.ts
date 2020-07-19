import React from "react";

import { TodoAction } from "../actions/action";
import { TodoProps } from "../components/Todo";

interface TodoState {
  todos?: TodoProps[] | [];
}

export const initialState: TodoState = { todos: [] };

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
      const removedTodos = stateTodos.slice();
      removedTodos.splice(action.index, 1);
      return {
        todos: removedTodos,
      };
    case "CHECK_TODO":
      const checkedTodos = stateTodos.slice();
      // do not work...
      //checkedTodos[action.index].done =  !checkedTodos[action.index].done;
      checkedTodos[action.index] = {
        "text": checkedTodos[action.index].text,
        "done": !checkedTodos[action.index].done,
      };
      //console.log("action index", checkedTodos[action.index]);
      //console.log("check", checkedTodos);

      return {
        todos: checkedTodos,
      };
    default:
      throw new Error();
  }
};
