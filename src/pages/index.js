import React from 'react';
import { Box, Button } from 'rebass/styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../store/actions';

const Home = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  const incrementCount = () => dispatch(increment());

  return (
    <Box>
      <Box color='reddo'>Hello world!</Box>
      <Button onClick={incrementCount}>Increment</Button>
      <Box>{count}</Box>
    </Box>
  );
};

export default Home;
