import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookDetailsPage from "screens/BookDetailsPage";
import SearchPage from "screens/SearchPage";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<SearchPage />} />
        <Route path="/book/:id" exact element={ <BookDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
