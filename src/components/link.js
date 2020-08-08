import React from 'react';
import { node, string, object, oneOfType } from 'prop-types';
import { Link as RebassLink } from 'rebass/styled-components';
import { Link as GatsbyLink } from 'gatsby';

const Link = ({ to, children, ...props }) => {
  // Gatsby's Link component only supports relative paths, so we need to perform a logic check first
  // https://www.gatsbyjs.org/docs/gatsby-link/#reminder-use-link-only-for-internal-links
  const isExternal = typeof to === 'string' && to.startsWith('http');

  if (isExternal) {
    return (
      <RebassLink href={to} {...props}>
        {children}
      </RebassLink>
    );
  } else {
    return (
      <RebassLink as={GatsbyLink} to={to} {...props}>
        {children}
      </RebassLink>
    );
  }
};

Link.propTypes = {
  to: oneOfType([string, object]).isRequired,
  children: oneOfType([node, string]).isRequired,
};

export default Link;
