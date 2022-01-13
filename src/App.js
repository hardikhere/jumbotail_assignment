import { StoreProvider } from "store/Store";
import AppRouter from "Routes";
import "./App.css";
import ErrorBoundary from "components/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <ErrorBoundary>
          <AppRouter />
        </ErrorBoundary>
      </StoreProvider>
    </div>
  );
}

export default App;
