const initialValue = {
  isLoggedin: Boolean(localStorage.getItem("isLoggedin")),
  currentUser: JSON.parse(localStorage.getItem("currentUser")),
};

const loginReducer = (state = initialValue, action) => {
  if (action.type === "SET_LOGIN") {
    return { isLoggedin: true, currentUser: action.payload };
  } else if (action.type === "SET_LOGOUT") {
    return { isLoggedin: false, currentUser: null };
  }
  return state;
};

export default loginReducer;
