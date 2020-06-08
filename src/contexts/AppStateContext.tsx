import React from "https://dev.jspm.io/react";
/*
, {
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} 
*/

export type AppState = {
  value: number;
};

const initialState: AppState = {
  value: 2,
};

const AppStateContext = React.createContext<AppState>(initialState);
const SetAppStateContext = React.createContext<
  React.Dispatch<React.SetStateAction<AppState>>
>(() => {});

export function useAppState() {
  return React.useContext(AppStateContext);
}
export function useSetAppState() {
  return React.useContext(SetAppStateContext);
}

export function AppStateProvider(props: {
  initialState?: AppState;
  children: React.ReactNode;
}) {
  const [state, setState] = React.useState<AppState>(
    props.initialState ?? initialState,
  );
  return (
    <AppStateContext.Provider value={state}>
      <SetAppStateContext.Provider value={setState}>
        {props.children}
      </SetAppStateContext.Provider>
    </AppStateContext.Provider>
  );
}
