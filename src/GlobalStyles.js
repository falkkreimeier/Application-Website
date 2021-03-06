import { createGlobalStyle } from "styled-components";

const GlobalStlyles = createGlobalStyle`

:root {
    --border-radius: 19px;
    --main-width: 352px;
    --main-padding: 10px;
    --color-fond: black;
    --main-font:  'Fira Sans', sans-serif;
    --main-Headline: 'Pragati Narrow', sans-serif;
} 

html {
    box-sizing: border-box;
}

* {
    box-sizing: inherit;
    
}

p {
    line-height: 1.5;
    font-size: 13px;
    font-family: var( --main-font);
}

li {
    line-height: 1.5;
    font-family: var( --main-font);
}

body {
    background-color: black;
    margin: 0;
    
}

h2 {
    font-family: Ventana;
}

`;
export default GlobalStlyles;
