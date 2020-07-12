import React, { useState, useReducer } from "react";
import { FormEvent } from "react";

interface Props {
  addTodo(text: string): void;
}

export const TodoForm = (props: Props) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!value) return;
    props.addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
      />
    </form>
  );
};
