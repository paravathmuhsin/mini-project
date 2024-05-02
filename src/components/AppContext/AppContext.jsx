import { createContext, useContext } from "react";
import PropTypes from "prop-types";

const Context = createContext(null);

const useAppContext = () => useContext(Context);

const AppContext = ({ children }) => {
  return (
    <Context.Provider value={{ name: "test" }}>{children}</Context.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.node,
};

export { AppContext, useAppContext };
