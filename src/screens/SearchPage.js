import React from "react";
import SearchInput from "components/SearchBookInput";
import SearchResults from "components/SearchResults";
import { css } from "@emotion/css";

function SearchPage() {
  return (
    <div>
      <div className={search_input_container}>
        <h1>Search for Books</h1>
        <SearchInput />
      </div>
      <SearchResults />
    </div>
  );
}

export default SearchPage;

const search_input_container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15rem;
  color: white;
  flex-direction: column;
  background: rgb(11, 198, 202);
  background: linear-gradient(
    163deg,
    rgba(11, 198, 202, 1) 0%,
    rgba(12, 160, 163, 1) 50%,
    rgba(11, 198, 202, 1) 100%
  );
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
`;
