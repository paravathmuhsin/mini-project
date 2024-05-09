import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/login.reducer";

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

// {
//     login: {
//         isLoggedin: false,
//         loggedUser: null,
//       }
// }

export default store;
