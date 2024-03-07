import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const useAppContext = () => useContext(Context);

const AppContext = ({ children }) => {
  const [title, setTitle] = useState("");

  return (
    <Context.Provider value={{ title, setTitle }}>{children}</Context.Provider>
  );
};

export default AppContext;
