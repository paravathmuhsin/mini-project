import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/login.reducer";
import postReducer from "./reducers/post.reducer";
import commentReducer from "./reducers/comment.reducer";
import userReducer from "./reducers/user.reducer";

export default configureStore({
  reducer: {
    login: loginReducer,
    post: postReducer,
    comment: commentReducer,
    user: userReducer,
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
