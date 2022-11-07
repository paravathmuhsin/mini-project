import React from "react";
import { Provider } from "react-redux";
import Routes from "./components/Routes";
import store from "./store/store";
import { Context } from "./utility/context";

function App() {
  return (
    <Provider store={store}>
      <Context>
        <Routes />
      </Context>
    </Provider>
  );
}

export default App;
