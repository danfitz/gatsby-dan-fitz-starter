import React from 'react';
import { Box, Heading, Button } from 'rebass/styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../store/actions';
import { SEO } from '../components';

const Home = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  const incrementCount = () => dispatch(increment());

  return (
    <>
      <SEO title='Home' />
      <Box as='main'>
        <Heading as='h1'>Dan Fitz Client Starter</Heading>
        <Button onClick={incrementCount}>Increment: {count}</Button>
      </Box>
    </>
  );
};

export default Home;
