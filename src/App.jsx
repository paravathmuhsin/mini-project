import { Provider } from "react-redux";
import AppRouter from "./Components/AppRouter/AppRouter";
import store from "./Store/store";

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
