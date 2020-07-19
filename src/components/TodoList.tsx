import React from "react";

import { Todo, TodoProps } from "./Todo";

interface Props {
  todos?: TodoProps[];
}

export const TodoList = (props: Props) => {
  if (props.todos === undefined) {
    return <></>;
  }

  return (
    <>
      {props.todos.map((todo: TodoProps, index: number) => (
        <Todo
          key={index}
          todo={todo}
          index={index}
        />
      ))}
    </>
  );
};
