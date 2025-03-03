import { Provider } from "react-redux";
import AppRouter from "./componets/AppRouter/AppRouter";
import store from "./store/store";
import "./styles/app.css"

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
