import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/login.reducer";
import postsReducer from "./reducers/posts.reducer";
import albumReducer from "./reducers/album.Reducer";

const store = configureStore({
  reducer: {
    login: loginReducer,
    post: postsReducer,
    Albums:albumReducer,
  },
});

export default store;
