import React from 'react';
import { Box, Heading, Button } from 'rebass/styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../store/actions';
import { Link } from 'gatsby';

const FourOhFour = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  const incrementCount = () => dispatch(increment());

  return (
    <Box mt='1rem'>
      <Heading as='h1'>Page Not Found</Heading>
      <Button onClick={incrementCount}>Increment: {count}</Button>
      <Box>
        <Link to='/'>Go Home</Link>
      </Box>
    </Box>
  );
};

export default FourOhFour;
