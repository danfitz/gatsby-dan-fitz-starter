import React from 'react';
import { string, node } from 'prop-types';
import { useSiteMetadata } from '../utils/queries';
import SEO from './seo';

const Layout = ({ pageSlug, children }) => {
  const siteMetadata = useSiteMetadata();
  const pageTitle = siteMetadata.pageTitles[pageSlug];

  return (
    <>
      <SEO title={pageTitle || '404'} />
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

Layout.propTypes = {
  pageSlug: string.isRequired,
  children: node.isRequired,
};

export default Layout;
