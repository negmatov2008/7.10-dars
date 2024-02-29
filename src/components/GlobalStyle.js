import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
  padding: 0;
}
/*
  Typographic tweaks!
  3. Add accessible line-height
  4. Improve text rendering
*/
html,body,#root{
    height: 100%;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: ${(props) => props.theme.font};
}
/*
  5. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
button{
    cursor: pointer;
    border: none;
}
/*
  6. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  7. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
ul{
    list-style: none;
}
/*
  8. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
`;
export default GlobalStyle;
