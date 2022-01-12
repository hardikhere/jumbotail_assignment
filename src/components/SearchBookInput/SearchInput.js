import React, { useState } from "react";
import { getBooksByQuery } from "../../services/getBooks.service";
import "./style.css";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const handleSearch = async (e) => {
    e.preventDefault();
    const { data } = await getBooksByQuery(query);
    clearQuery();
    console.log("🚀 ~ file: App.js ~ line 9 ~ fetchBooks ~ data", data);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const clearQuery = () => {
    setQuery("");
  };
  return (
    <form onSubmit={handleSearch}>
      <input className="search_input" onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}
