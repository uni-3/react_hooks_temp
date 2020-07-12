import React, { useContext } from "react";

import { DispatchContext } from "../App";
import { reducer, initialState } from "../reducers/reducer";
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

export const TodoAction = ({ todo, index }: Props) => {
  const { dispatch } = useContext(DispatchContext);

  return (
    <>
      <div
        className="todo"
      >
        <CheckBox done={todo.done} />
        <button onClick={() => dispatch(removeTodo(index))}>x</button>
        {todo.text}
        <button onClick={() => dispatch(checkTodo(index))}>
          {todo.done ? "yet" : "done"}
        </button>
      </div>
    </>
  );
};
