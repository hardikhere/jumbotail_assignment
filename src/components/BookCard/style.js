import { css } from "@emotion/css";

export const book_card_style = css`
  padding: 4px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 2px 2px 2px rgba(65, 65, 65, 0.6);
  margin: 8px;
  width: 250px;
  cursor: pointer;
`;

export const header_style = css`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 30px;
`;

export const title_style = css`
  font-weight: bolder;
  font-size: larger;
  color: rgb(80, 80, 80);
`;

export const subtitle_style = css`
  font-weight: lighter;
  font-size: smaller;
`;

export const image_container_style = css`
  display: flex;
  justify-content: center;
  height: 300px;
  overflow: hidden;
`;
