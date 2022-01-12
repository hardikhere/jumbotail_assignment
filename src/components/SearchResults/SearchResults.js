import BookCard from "components/BookCard";
import LoadingIndicator from "components/LoadingIndicator";
import React from "react";
import { useStore } from "store/store";
import { result_area } from "./style.js";

function SearchResults() {
  const [state] = useStore();
  const showQuery = state.query.length > 0;

  if (state.isLoading)
    return (
      <div className={result_area}>
        <LoadingIndicator />
      </div>
    );
  return (
    <div style={{ margin: "20px" }}>
      <h2>{showQuery && `Search results for " ${state.query} " are:`}</h2>
      <div className={result_area}>
        {state?.results?.map((book) => {
          return <BookCard key={book.id} details={book} />;
        })}
      </div>
    </div>
  );
}

export default SearchResults;
