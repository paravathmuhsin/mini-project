import { SET_LOGIN, SET_LOGOUT } from "../types/login-types";

const initialState = {
  isLogin: Boolean(localStorage.getItem("isLogin")),
  loggedUser: JSON.parse(localStorage.getItem("loggedUser")),
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, isLogin: true, loggedUser: action.payload };
    case SET_LOGOUT:
      return { ...state, isLogin: false, loggedUser: null };
    default:
      return state;
  }
};
