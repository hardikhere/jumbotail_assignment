import BookCard from "components/BookCard";
import LoadingIndicator from "components/LoadingIndicator";
import React from "react";
import { useStore } from "store/store";
import "./style.css";

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
      <div className="flex wrap result_area">
        {state?.results?.map((book) => {
          return <BookCard key={book.id} details={book} />;
        })}
      </div>
    </div>
  );
}

export default SearchResults;
