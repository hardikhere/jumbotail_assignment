import BookCard from "components/BookCard";
import LoadingIndicator from "components/LoadingIndicator";
import React from "react";
import { useStore } from "store/store";

function SearchResults() {
  const [state] = useStore();
  const showQuery = state.query.length > 0;

  if (state.isLoading)
    return (
      <div>
        <LoadingIndicator />
      </div>
    );
  return (
    <div>
      <span>{showQuery && `Search results for " ${state.query} " are:`}</span>
      <div>
        {state.results?.items.map((book) => {
          return <BookCard />;
        })}
      </div>
    </div>
  );
}

export default SearchResults;
