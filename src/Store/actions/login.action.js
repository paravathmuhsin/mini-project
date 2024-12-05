import { SET_LOGIN, SET_LOGOUT } from "../types/login.type";

export const setLogin = (loggedUser) => {
  return { type: SET_LOGIN, payload: loggedUser };
};

export const setLogout = () => {
  return { type: SET_LOGOUT };
};
