import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/login.reducer";
import postsReducer from "./reducers/posts.reducer";

const store = configureStore({
  reducer: {
    login: loginReducer,
    post: postsReducer,
  },
});

export default store;
