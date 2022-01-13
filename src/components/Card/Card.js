import React from "react";
import { css } from "@emotion/css";

const card_style = css`
  padding: 6px 20px;
  background-color: white;
  box-shadow: 2px 4px 4px grey;
  border-radius: 4px;
  margin: 6px;
  width: fit-content;
  height: auto;
  word-wrap: break;
`;

function Card({ children, withLeftBorder, ...rest }) {
  return (
    <div
      style={{ borderLeft: withLeftBorder ? "solid dodgerblue" : "none" }}
      className={card_style}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
