import { useEffect } from "react";
import "./App.css";
import { getBooksByQuery } from "./services/getBooks.service";

function App() {
  const fetchBooks = async () => {
    const { data } = await getBooksByQuery("coding");
    console.log("🚀 ~ file: App.js ~ line 9 ~ fetchBooks ~ data", data);
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div className="App">
      <input />
    </div>
  );
}

export default App;
