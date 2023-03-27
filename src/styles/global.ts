import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    min-height: 100vh;
  }

  html {
    scroll-behavior: smooth;
  }

  :focus {
    outline: 0;
  }

  body {
    background: #111827;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  body, input, textarea, button {
    font-family: "Poppins", sans-serif;
    font-family: "Orbitron", sans-serif;
    font-weight: 400;
    font-size: 18px;
  }
`
