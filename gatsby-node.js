// Gets page title using (1) pageTitles in siteMetadata and (2) path to page file
const getPageTitle = pagePath => {
  const { siteMetadata } = require('./gatsby-config');
  const pageFilename = pagePath.split('/').pop();
  const pageSlug = pageFilename.split('.')[0];
  const pageTitle = siteMetadata.pageTitles[pageSlug];

  return pageTitle;
};

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
