// Gets page title using (1) pageTitles in siteMetadata and (2) path to page file
const getPageTitle = pagePath => {
  const { siteMetadata } = require('./gatsby-config');
  const pageFilename = pagePath.split('/').pop();
  const pageSlug = pageFilename.split('.')[0];
  const pageTitle = siteMetadata.pageTitles[pageSlug];

  return pageTitle;
};

// Currently, I am using this to pass custom context to pages
// Basic boilerplate for this comes from https://www.gatsbyjs.org/docs/creating-and-modifying-pages/#pass-context-to-pages
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  deletePage(page);

  const pageTitle = getPageTitle(page.componentPath);

  createPage({
    ...page,
    context: {
      ...page.context,
      pageTitle,
    },
  });
};
