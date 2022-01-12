import React, { useState } from "react";
import { getBooksByQuery } from "services/getBooks.service";
import { getBooks, setBooks } from "store/getSearchResultsReducer";
import { useStore } from "store/store";
import { search_input, search_btn_styles } from "./style.js";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const [state, dispatch] = useStore();
  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.length === 0) {
      alert("Search Query can not be empty!");
      return;
    }
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
      <input
        placeholder="Search by book name"
        className={search_input}
        value={query}
        onChange={handleChange}
      />
      <button
        className={search_btn_styles}
        type="submit"
        disabled={state.isLoading}
      >
        Search
      </button>
    </form>
  );
}
