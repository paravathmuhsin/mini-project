import { createStore, applyMiddleware } from "@reduxjs/toolkit";
// import loginReducer from "./reducers/login.reducer";
import reducers from "./reducers";
import { thunk } from "redux-thunk";

// export default configureStore({
//   reducer: {
//     login: loginReducer,
//   },
// });

export default createStore(reducers, applyMiddleware(thunk));
