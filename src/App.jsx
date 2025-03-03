import { Provider } from "react-redux";
import AppRouter from "./componets/AppRouter/AppRouter";
import store from "./store/store";
import AppContext from "./componets/AppContext/AppContext";

const App = () => {
  return (
    <Provider store={store}>
      <AppContext>
        <AppRouter />
      </AppContext>
    </Provider>
  );
};

export default App;
