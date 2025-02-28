import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/login.reducer";

export default configureStore({
  reducer: {
    login: loginReducer,
  },
});

// {
//     login: {
//         isLoggedin: false,
//         currentUser: null,
//     }
// }
