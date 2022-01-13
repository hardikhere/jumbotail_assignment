import React from "react";
import { css } from "@emotion/css";

const card_style = css`
  padding: 10px 20px;
  background-color: white;
  box-shadow: 2px 4px 4px grey;
  border-radius: 4px;
  margin: 6px;
  width: max-content;
  
`;

function Card({ children }) {
  return <div className={card_style}>{children}</div>;
}

export default Card;
