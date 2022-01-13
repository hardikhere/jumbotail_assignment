import React, { useEffect, useState } from "react";
import { getBooksByQuery } from "services/getBooks.service";
import { getBooks, setBooks } from "store/getSearchResultsReducer";
import { useStore } from "store/Store";
import { search_input, search_btn_styles } from "./style.js";
import { useSearchParams } from "react-router-dom";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const [state, dispatch] = useStore();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const item = searchParams.get("q");
    if (!!item) {
      getResultsFromQuery(item);
    }
  }, []);

  const getResultsFromQuery = async (queryToSearch) => {
    dispatch(getBooks(queryToSearch));
    const { data } = await getBooksByQuery(queryToSearch);
    dispatch(setBooks(data.items));
    setSearchParams({ q: queryToSearch });
  };

  const handleSearch = async (e) => {
    e?.preventDefault();
    if (query.length === 0) {
      alert("Search Query can not be empty!");
      return;
    }
    await getResultsFromQuery(query);
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
