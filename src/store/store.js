import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/login.reducer";
import postReducer from "./reducers/post.reducer";
import commentReducer from "./reducers/comment.reducer";

export default configureStore({
  reducer: {
    login: loginReducer,
    post: postReducer,
    comment: commentReducer,
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
