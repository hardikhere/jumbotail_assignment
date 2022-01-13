import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingIndicator from "components/LoadingIndicator";
const BookDetailsPage = lazy(() => import("screens/BookDetailsPage"));
const SearchPage = lazy(() => import("screens/SearchPage"));

function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<LoadingIndicator />}>
        <Routes>
          <Route path="/" exact element={<SearchPage />} />
          <Route path="/book/:id" exact element={<BookDetailsPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRouter;
