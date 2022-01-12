import SearchInput from "./components/SearchBookInput";

import "./App.css";
import { StoreProvider } from "store/store";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <SearchInput />
      </StoreProvider>
    </div>
  );
}

export default App;
