import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Poppins', sans-serif;
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

`;

export default GlobalStyles;
