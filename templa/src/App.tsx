import React from "https://dev.jspm.io/react";
import { ReactDOM } from "https://dev.jspm.io/react-dom/index.js";

import {
  AppStateProvider,
  useAppState,
  useSetAppState,
  AppState,
} from "./contexts/AppStateContext.tsx";

function Counter() {
  const state = useAppState();
  const setAppState = useSetAppState();
  return (
    <div>
      {state.value}
      <button
        onClick={() => {
          console.log("click");
          setAppState((s: AppState) => ({ value: s.value + 1 }));
        }}
      >
        ++
      </button>
    </div>
  );
}

function App() {
  const [count, setCount] = React.useState<number>(0);
  return (
    <AppStateProvider>
      <Counter />
      <button onClick={() => setCount(count + 1)}>Click the 🦕</button>
      {count}
    </AppStateProvider>
  );
}

export default App;

//ReactDOM.render(<App />, window.document.querySelector("#root"));

/*
const App = () => (
  <div>
    Hello React
  </div>
);

export default App;
*/
