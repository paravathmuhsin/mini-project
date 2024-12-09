import { Provider } from "react-redux";
import AppRouter from "./Components/AppRouter/AppRouter";
import store from "./Store/store";
import AppContext from "./Components/AppContext/AppContext";

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
