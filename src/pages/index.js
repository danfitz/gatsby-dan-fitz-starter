import React from 'react';
import { Box, Button } from 'rebass/styled-components';
import GlobalTheme from '../theme';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'gatsby';

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);
  return (
    <GlobalTheme>
      <Box>
        <Box bg='red'>Hello world!</Box>
        <Box>{count}</Box>
        <Button onClick={() => dispatch({ type: 'INCREMENT' })}>
          Increment
        </Button>
        <Link to='/about'>Go</Link>
      </Box>
    </GlobalTheme>
  );
}
