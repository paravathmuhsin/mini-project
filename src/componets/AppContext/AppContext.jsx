import { createContext, useContext, useState } from "react";

const Context = createContext();

export const useAppContext = () => useContext(Context);

const AppContext = ({ children }) => {
  const [pageTitle, setPageTitle] = useState("");
  return <Context value={{ pageTitle, setPageTitle }}>{children}</Context>;
};

export default AppContext;
