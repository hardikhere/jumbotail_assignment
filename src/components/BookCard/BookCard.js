import React from "react";
import { Link } from "react-router-dom";
import "./style.js";
import {
  book_card_style,
  header_style,
  image_container_style,
  subtitle_style,
  title_style,
} from "./style.js";
import { trimSubTitle, trimTitle } from "./utils";

function BookCard({ details }) {
  const { volumeInfo, id } = details;
  const { imageLinks } = volumeInfo;
  const title = trimTitle(volumeInfo.title);
  const subTitle = trimSubTitle(volumeInfo.subtitle);
  return (
    <Link to={`/book/${id}`}>
      <div className={book_card_style}>
        <div className={header_style}>
          <span className={title_style}>{title}</span>
          <span className={subtitle_style}>{subTitle}</span>
        </div>
        <div className={image_container_style}>
          <img src={imageLinks?.thumbnail} alt="book" />
        </div>
      </div>
    </Link>
  );
}

export default BookCard;
