import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  footer {
    position: absolute;
    bottom: -10rem;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: 2rem;
  }
  small {
    display: block;
  }
  button {
    display: block;
    color: ${({ theme }) => theme.text};
    border: 2px solid ${({ theme }) => !theme.toggleBorder} !important;
  }
  a {
    color: ${({ theme }) => theme.text};
  }

  h1, h2, h3, h4, h5, h6{
    color: ${({ theme }) => theme.text};
  }

  .library{
    background: ${({ theme }) => theme.body};
  }

  // .library-songs{
  //   background: ${({ theme }) => theme.body};
  // }

  .selected h3{
    color: #363537;
    background: ${({ theme }) => (!theme).body};
  }

  .selected h4{
    color: #646464;
  }
`;
