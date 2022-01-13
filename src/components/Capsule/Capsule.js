import { css } from "@emotion/css";
import React from "react";

function Capsule({ text }) {
  return <div className={capsule_style}>{text}</div>;
}

export default Capsule;

const capsule_style = css`
  padding: 6px 10px;
  background-color: #155280;
  border-radius: 15px;
  color: white;
  margin: 2px;
  width: fit-content;
`;
