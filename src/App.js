import { Provider } from "react-redux";
import AppRouter from "./components/AppRouter/AppRouter";
import store from "./store/store";
import AppContext from "./components/AppContext/AppContext";

function App() {
  return (
    <AppContext>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </AppContext>
  );
}

export default App;
