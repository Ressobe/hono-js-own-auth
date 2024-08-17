import { css } from "hono/css";

export const resetCSS = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  #root,
  #__next {
    isolation: isolate;
  }
`;

export const mainContainerClass = css`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const labelClass = css`
  color: #12244e;
  font-weight: bold;
  font-size: 1rem; /* 16px */
  line-height: 1.5rem; /* 24px */
  padding-bottom: 2px;
`;

export const fieldsetClass = css`
  border: none;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const formSection = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;

export const formClass = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
`;

export const h1 = css`
  color: #12244e;
  text-align: center;
  font-size: 2.7rem;
`;

export const h2 = css`
  color: #717c98;
  text-align: center;
  font-weight: normal;
  font-size: 1.5rem;
`;

export const button = css`
  border: none;
  display: block;
  background-color: rgba(133, 94, 243, 1);
  color: white;
  padding: 12px 0 12px;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1.125rem;
  line-height: 1.75rem;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:hover {
    background-color: rgba(133, 94, 243, 0.85);
  }
  &:active {
    transform: scale(1.1);
  }
`;

export const a = css`
  display: block;
  background-color: rgba(236, 236, 249, 1);
  text-align: center;
  text-decoration-line: none;
  color: #12244e;
  padding: 12px 0 12px;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:hover {
    background-color: rgba(225, 225, 249, 1);
  }
  &:active {
    transform: scale(1.1);
  }
`;

export const input = css`
  padding: 8px 12px;
  border: 1px solid;
  border-color: rgba(128, 128, 128, 0.5);
  border-radius: 0.5rem;
`;
