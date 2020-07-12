import React, { useState, useReducer, useContext } from "react";

import { DispatchContext } from "../App";
import { reducer, initialState } from "../reducers/reducer";
import { TodoAction, TodoProps } from "./TodoAction";

interface Props {
  todos?: TodoProps[];
  checkTodo?(index: number): void;
}

export const TodoListAction = (props: Props) => {
  //const dispatch = useContext(DispatchContext);
  //console.log("todolist", dispatch);
  if (props.todos === undefined) {
    return <></>;
  }

  return (
    <>
      {props.todos.map((todo: TodoProps, index: number) => (
        <TodoAction
          key={index}
          todo={todo}
          index={index}
        />
      ))}
    </>
  );
  /*
  */
};
