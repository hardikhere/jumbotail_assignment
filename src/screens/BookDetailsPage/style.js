import { css } from "@emotion/css";

export const header_style = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 15rem;
  position: relative;
  color: white;
  flex-direction: column;
  background: rgb(11, 198, 202);
  background: linear-gradient(
    163deg,
    rgba(11, 198, 202, 1) 0%,
    rgba(12, 160, 163, 1) 50%,
    rgba(11, 198, 202, 1) 100%
  );
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  & > span .subtitle {
    width: 30rem;
  }
`;

export const image_container = css`
  position: absolute;
  bottom: -20%;
  left: 2rem;
  height: 10rem;
  width: 8rem;
  display: flex;
  justify-content: center;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
`;
