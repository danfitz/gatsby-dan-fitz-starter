import React from 'react';
import { Box } from 'rebass/styled-components';
import GlobalTheme from './theme';

export default function Home() {
  return (
    <GlobalTheme>
      <Box bg='red'>Hello world!</Box>
    </GlobalTheme>
  );
}
