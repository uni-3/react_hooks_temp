import React, { useState, useContext } from "react";
import { FormEvent } from "react";

import { DispatchContext } from "../App";
import { addTodo } from "../actions/action";

export const TodoForm = () => {
  const [value, setValue] = useState("");

  const { dispatch } = useContext(DispatchContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!value) return;
    dispatch(addTodo(value));
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
