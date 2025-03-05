import { Provider } from "react-redux";
import AppRouter from "./componets/AppRouter/AppRouter";
import store from "./store/store";
import AppContext from "./componets/AppContext/AppContext";
import ErrorBoundry from "./componets/ErrorBoundry/ErrorBoundry";

const App = () => {
  return (
    <ErrorBoundry>
      <Provider store={store}>
        <AppContext>
          <AppRouter />
        </AppContext>
      </Provider>
    </ErrorBoundry>
  );
};

export default App;
