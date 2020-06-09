import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
        font-family: 'menloregular';
        src: url(${require('./fonts/menlo-regular-webfont.eot')});
        src: url(${require('./fonts/menlo-regular-webfont.eot?#iefix')}) format('embedded-opentype'),
             url(${require('./fonts/menlo-regular-webfont.woff2')}) format('woff2'),
             url(${require('./fonts/menlo-regular-webfont.woff')}) format('woff'),
             url(${require('./fonts/menlo-regular-webfont.ttf')}) format('truetype'),
             url(${require('./fonts/menlo-regular-webfont.svg')}) format('svg');
        font-weight: normal;
        font-style: normal;
    }
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

`
export default GlobalStyles