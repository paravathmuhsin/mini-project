import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/login.reducer";
import { postSlice } from "./slices/posts.slice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    post: postSlice.reducer
  },
});

export default store;
