import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #FA6000;
    --secondary: #FF0404;
    --sdt: rgba(63, 47, 15, 0.40);
    --text: #010001;
    --textV: #2B0504;
    --background: #FFBD59;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: var(--background);
    font-family: 'Roboto Slab', serif;
    overflow-x: hidden;
  }

  a{
    text-decoration: none;
  }
`
