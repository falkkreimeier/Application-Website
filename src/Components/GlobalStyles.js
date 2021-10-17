import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --border-radius: 5px;
  --main-padding: 5px;
  --color-fond: black;
}


html {
  box-sizing: border-box;
}

* {
  box-sizing: inherit;
}

ul {
  margin: 0;
} 

body {
 background-color: black;
  text-align: center;
  font-family: 'PT Serif', serif;
}`;

export default GlobalStyle;
