import { SET_LOGIN, SET_LOGOUT } from "../types/login.type";

export const setLoginAction = (user) => ({ type: SET_LOGIN, payload: user });
export const setLogoutAction = () => ({ type: SET_LOGOUT });
