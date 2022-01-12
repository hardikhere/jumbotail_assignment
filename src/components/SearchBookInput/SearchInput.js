import React, { useState } from "react";
import { getBooksByQuery } from "services/getBooks.service";
import { getBooks, setBooks } from "store/getSearchResultsReducer";
import { useStore } from "store/store";
import "./style.css";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const [state, dispatch] = useStore();
  const handleSearch = async (e) => {
    e.preventDefault();
    dispatch(getBooks(query));
    const { data } = await getBooksByQuery(query);
    console.log(
      "🚀 ~ file: SearchInput.js ~ line 14 ~ handleSearch ~ data",
      data
    );
    dispatch(setBooks(data.items));
    clearQuery();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const clearQuery = () => {
    setQuery("");
  };
  return (
    <form onSubmit={handleSearch}>
      <input className="search_input" value={query} onChange={handleChange} />
      <button type="submit" disabled={state.isLoading}>
        Search
      </button>
    </form>
  );
}
