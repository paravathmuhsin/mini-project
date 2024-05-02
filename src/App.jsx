import { AppContext } from "./components/AppContext/AppContext";
import AppRouter from "./components/AppRouter/AppRouter";

function App() {
  return (
    <AppContext>
      <AppRouter />
    </AppContext>
  );
}

export default App;
