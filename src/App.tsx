import React, { useReducer, createContext } from "react";

import { reducer, initialState } from "./reducers/reducer";
import {
  TodoAction,
} from "./actions/action";
import "./App.css";

import {
  AppStateProvider,
  useAppState,
  useSetAppState,
  AppState,
} from "./contexts/AppStateContext";

import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/Form";

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

// コンテキストを作成する
type ContextType = {
  dispatch: React.Dispatch<TodoAction>;
};
export const DispatchContext = createContext({} as ContextType);

export const TodoComp: React.FC = () => {
  // TODO get todo from external storage
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <DispatchContext.Provider value={{ dispatch: dispatch }}>
        <TodoForm />
        <TodoList
          todos={state.todos}
        />
      </DispatchContext.Provider>
    </>
  );
};

function App() {
  return (
    <>
      <AppStateProvider>
        <Counter />
      </AppStateProvider>
      <TodoComp />
    </>
  );
}

export default App;
