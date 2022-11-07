import React, { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

const useAppContext = () => useContext(AppContext);
const Context = ({ children }) => {
  const [state, setState] = useState("");
  const providerValue = {
    appTitle: state,
    updateTitle: (title) => {
      setState(title);
    },
  };
  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};

export { Context, useAppContext };
