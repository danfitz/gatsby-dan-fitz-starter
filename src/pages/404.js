import React from 'react';
import { Box, Heading, Button, Link } from 'rebass/styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../store/actions';
import { Link as GatsbyLink } from 'gatsby';

const FourOhFour = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  const incrementCount = () => dispatch(increment());

  return (
    <Box as='main'>
      <Heading as='h1' mt='1rem'>
        Page Not Found
      </Heading>
      <Button onClick={incrementCount}>Increment: {count}</Button>
      <Link as={GatsbyLink} to='/' display='block'>
        Go Home
      </Link>
    </Box>
  );
};

export default FourOhFour;
