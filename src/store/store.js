import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/login.reducer";
import postReducer from "./reducers/post.reducer";
import userReducer from "./reducers/user.reducer";

export default configureStore({
  reducer: {
    login: loginReducer,
    post: postReducer,
    user: userReducer
  },
});

// {
//     login: {
//         isLoggedin: false,
//         currentUser: null,
//     },
      // post: {
      //   list: []
      // }
// }
