import React from "react";
import propTypes from "prop-types";
import "./style.css";

function BookCard({ details }) {
  const { volumeInfo } = details;
  return (
    <div className="book_card">
      <div className="header">
        <span className="title">{volumeInfo.title}</span>
        <span className="subtitle">{volumeInfo.subtitle}</span>
      </div>
    </div>
  );
}

export default BookCard;

BookCard.propTypes = {
  details: {
    volumeInfo: {
      title: propTypes.string,
      subtitle: propTypes.string,
    },
  },
};
