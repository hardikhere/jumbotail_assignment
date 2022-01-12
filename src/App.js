import { StoreProvider } from "store/Store";
import AppRouter from "Routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <AppRouter />
      </StoreProvider>
    </div>
  );
}

export default App;
