import { useContext } from "react";
import { AppCont } from "./AppContext";

const useAppContext = () => useContext(AppCont);
export default useAppContext;
