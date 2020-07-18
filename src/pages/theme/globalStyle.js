import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * { box-sizing: border-box; }

  // Add more global styles here
`;

export default GlobalStyle;
