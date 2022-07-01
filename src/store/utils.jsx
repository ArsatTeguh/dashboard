// disinila wadah dari nilai global state
import { createContext, useContext } from "react";
import React, { useReducer } from "react";



export const AppContext = createContext({});


export function useStore() {
  return useContext(AppContext);
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_VALUE":
      return { ...state, value: action.payload};
    case "ADD_TABS":
      return { ...state, tabs: action.payload};
    default:
      throw new Error("invalid token");
  }
};

const initialState = {
  value: false,
  tabs: false
};


export const DataContext = ({ children }) => {
  const [state, dispacth] = useReducer(reducer, initialState);

  const btnNav = ({ type, value }) => {
    dispacth({
      type: type,
      payload: value,
    });
  };
  const btntabs = ({ type, value }) => {
    dispacth({
      type: type,
      payload: value,
    });
  };



  const initialValue = [state, btnNav, btntabs];

  return (
    <AppContext.Provider value={initialValue}>{children}</AppContext.Provider>
  );
};
