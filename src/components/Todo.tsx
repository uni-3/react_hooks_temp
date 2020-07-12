import React from "react";

export interface TodoProps {
  text?: string;
  done: boolean;
}

interface Props {
  todo: TodoProps;
  index: number;
  checkTodo(index: number): void;
}

const TodoCheck = ({ done }: TodoProps) => (
  <input type="checkbox" checked={done} />
);

export const Todo = ({ todo, index, checkTodo }: Props) => {
  return (
    <>
      <div
        className="todo"
      >
        <TodoCheck done={todo.done} />
        {todo.text}
        <button onClick={() => checkTodo(index)}>
          {todo.done ? "yet" : "done"}
        </button>
      </div>
    </>
  );
};
