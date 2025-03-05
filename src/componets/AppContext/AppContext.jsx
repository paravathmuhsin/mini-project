import { createContext, useContext, useState } from "react";

const Context = createContext();

export const useAppContext = () => useContext(Context);

const AppContext = ({ children }) => {
  const [pageTitle, setPageTitle] = useState("");
  const [appBreadcrumbs, setAppBreadcrumbs] = useState([]);
  return (
    <Context
      value={{ pageTitle, appBreadcrumbs, setPageTitle, setAppBreadcrumbs }}
    >
      {children}
    </Context>
  );
};

export default AppContext;
