import React, { useContext } from "react";

import { DispatchContext } from "../App";
import { removeTodo, checkTodo } from "../actions/action";

export interface TodoProps {
  text?: string;
  done: boolean;
}

interface Props {
  todo: TodoProps;
  index: number;
}

const CheckBox = ({ done }: TodoProps) => (
  <input type="checkbox" checked={done} />
);

export const Todo = ({ todo, index }: Props) => {
  const { dispatch } = useContext(DispatchContext);

  const onClickRemove = (index: number) => {
    dispatch(removeTodo(index));
  };
  const onClickCheck = (index: number) => {
    dispatch(checkTodo(index));
  };

  return (
    <>
      <div
        className="todo"
      >
        <CheckBox done={todo.done} />
        <button onClick={() => onClickRemove(index)}>remove</button>
        {todo.text}
        <button onClick={() => onClickCheck(index)}>
          {todo.done ? "yet" : "done"}
        </button>
      </div>
    </>
  );
};
