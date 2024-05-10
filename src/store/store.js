import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/login.reducer";
import photosReducer from "./reducers/photos.reducer";
import { thunk } from "redux-thunk";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    photos: photosReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware(), thunk];
  },
});

// {
//     login: {
//         isLoggedin: false,
//         loggedUser: null,
//       },
// photos: []
// }

export default store;
