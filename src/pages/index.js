import React from 'react';
import { Flex, Heading, Button } from 'rebass/styled-components';
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
      <Flex as='main' flexDirection='column' alignItems='center'>
        <Heading as='h1' my='md'>
          Dan Fitz Client Starter
        </Heading>
        <Button p='sm' onClick={incrementCount}>
          Increment: {count}
        </Button>
      </Flex>
    </>
  );
};

export default Home;
