import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Inter', sans-serif;
    background-color: #f5f6f8;
  }
  p{
    opacity: 0.6;
    line-height: 1.5;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color:black;
  }
  input, textarea {
    padding: 0.5rem ;
    width: 100%;
    border: 1px solid gray;
    border-radius: 0.375rem;
    font-size: 1rem;
    color: #374151;
  }
  label {
    display: block;
    margin: 24px auto 0 auto;
  }
  label span {
    display: block;
    font-size: 1.125rem;
    color: #374151;
    font-weight: 500;
    margin-bottom: 0.5rem
  }
  button {
    cursor: pointer;
  }

`;

export default GlobalStyles;
