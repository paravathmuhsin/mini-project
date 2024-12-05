import { SET_LOGIN, SET_LOGOUT } from "../types/login.type";

const initialValue = {
  isLoggedIn: false,
  loggedUser: null,
};

const loginReducer = (state = initialValue, action) => {
  if (action.type === SET_LOGIN) {
    return { isLoggedIn: true, loggedUser: action.payload };
  } else if (action.type === SET_LOGOUT) {
    return { isLoggedIn: false, loggedUser: null };
  }
  return state;
};

export default loginReducer;
