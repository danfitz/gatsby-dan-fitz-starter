import React from 'react';
import { node, string, object, oneOfType } from 'prop-types';
import { Link as RebassLink } from 'rebass/styled-components';
import { Link as GatsbyLink } from 'gatsby';

const Link = ({ to, children, ...props }) => {
  // Gatsby's Link component only supports relative paths, so we need to perform a logic check first
  // https://www.gatsbyjs.org/docs/gatsby-link/#reminder-use-link-only-for-internal-links
  // This test assumes all internal links are either (1) an object or (2) start with exactly one slash
  const isInternal =
    typeof to === 'object' || (typeof to === 'string' && /^\/(?!\/)/.test(to));

  if (isInternal) {
    return (
      <RebassLink as={GatsbyLink} to={to} {...props}>
        {children}
      </RebassLink>
    );
  } else {
    return (
      <RebassLink href={to} {...props}>
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
