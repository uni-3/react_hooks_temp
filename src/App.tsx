import React, { useState, useReducer, createContext } from "react";

import { reducer, initialState } from "./reducers/reducer";
import {
  initTodo,
  addTodo,
  removeTodo,
  checkTodo,
  TodoAction,
} from "./actions/action";
import logo from "./assets/logo.svg";
import "./App.css";

import {
  AppStateProvider,
  useAppState,
  useSetAppState,
  AppState,
} from "./contexts/AppStateContext";

import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/Form";

import { TodoListAction } from "./components/TodoListAction";

function Counter() {
  const state: AppState = useAppState();
  const setAppState = useSetAppState();
  return (
    <div>
      {state.value}
      <button
        onClick={() => {
          setAppState((s: AppState) => ({
            value: s.value + 1,
          }));
        }}
      >
        ++
      </button>
    </div>
  );
}

type ContextType = {
  dispatch: React.Dispatch<TodoAction>;
};

// コンテキストを作成する
export const DispatchContext = createContext({} as ContextType);

export const TodoComp: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("init reducer", state);
  // init user effect?
  /*
  const handleInit = (value: string) => {
    dispatch(initTodo(state.todos));
    console.log(value);
  };
  */
  const handleAdd = (text: string) => {
    console.log("handle add", text);
    dispatch(addTodo(text));
  };

  return (
    <>
      <h4>
        todo reducer
      </h4>
      <DispatchContext.Provider value={{ dispatch: dispatch }}>
        <TodoForm addTodo={handleAdd} />
        <TodoListAction
          todos={state.todos}
        />
      </DispatchContext.Provider>
    </>
  );
};

function App() {
  const [todos, setTodos] = useState([
    { text: "Learn about React", done: false },
    { text: "Meet friend for lunch", done: false },
    { text: "Build really cool todo app", done: false },
  ]);
  const addTodo = (text: string) => {
    const newTodos = [...todos, { text: text, done: false }];
    setTodos(newTodos);
  };

  const checkTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <AppStateProvider>
      <Counter />
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        checkTodo={checkTodo}
      />
      <TodoComp />
    </AppStateProvider>
  );
}

export default App;
