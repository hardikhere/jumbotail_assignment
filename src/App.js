import SearchInput from "./components/SearchBookInput";

import "./App.css";
import { StoreProvider } from "store/store";
import SearchResults from "components/SearchResults";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <SearchInput />
        <SearchResults />
      </StoreProvider>
    </div>
  );
}

export default App;
