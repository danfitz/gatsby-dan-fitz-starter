import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './index';
import GlobalStyle from './globalStyle';

const GlobalTheme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default GlobalTheme;
