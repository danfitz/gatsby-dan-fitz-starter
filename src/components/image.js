import React from 'react';
import { Image as RebassImage } from 'rebass/styled-components';
import GatsbyImage from 'gatsby-image';

const Image = props => {
  return <RebassImage as={GatsbyImage} {...props} />;
};

export default Image;
