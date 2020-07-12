import React, { useState } from "react";
import { Todo, TodoProps } from "./Todo";

interface Props {
  todos: TodoProps[];
  checkTodo(index: number): void;
}

export const TodoList = (props: Props) => {
  // TODO context componentから流し込む
  return (
    <>
      {props.todos.map((todo: TodoProps, index: number) => (
        <Todo
          key={index}
          todo={todo}
          index={index}
          checkTodo={props.checkTodo}
        />
      ))}
    </>
  );
};
