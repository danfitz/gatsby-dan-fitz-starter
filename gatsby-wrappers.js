import React from 'react';
// Redux provider
import { Provider } from 'react-redux';
import createStore from './src/store';
// Theme provider
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import GlobalStyle from './src/theme/globalStyle';

import { Layout } from './src/components';

export const wrapWithProviders = ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = createStore();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {element}
      </ThemeProvider>
    </Provider>
  );
};

export const wrapWithLayout = ({ element, props }) => {
  const { componentChunkName } = props.pageResources.page;
  const splitName = componentChunkName.split('-');
  let pageSlug = splitName[splitName.length - 2];
  if (pageSlug === '404') pageSlug = '_404';

  return <Layout pageSlug={pageSlug}>{element}</Layout>;
};
