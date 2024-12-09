import { createContext, useState } from "react";

export const AppCont = createContext(null);

const AppContext = ({ children }) => {
  const [context, setContext] = useState({
    appTitle: "",
    breadcrumbs: [],
    activeMenu: "",
  });
  return (
    <AppCont.Provider value={{ context, setContext }}>
      {children}
      {/* expecting AppRouter */}
    </AppCont.Provider>
  );
};

export default AppContext;
