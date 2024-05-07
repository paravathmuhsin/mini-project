import { SET_LOGIN, SET_LOGOUT } from "../types/login.type";

export const setLogin = (payload, token) => ({
  type: SET_LOGIN,
  payload,
  token,
});

export const setLogout = () => ({ type: SET_LOGOUT });
