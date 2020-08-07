/**
 * Based on guide https://www.gatsbyjs.org/tutorial/seo-and-social-sharing-cards-tutorial/
 * Adds title, description, keywords (general, open graph, and twitter)
 * Conditionally adds canonical tag (https://support.google.com/webmasters/answer/139066?hl=en)
 * Conditionally adds image for social sharing
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useSiteMetadata } from '../utils/queries';

const SEO = ({
  title,
  description,
  lang,
  meta,
  image: metaImage,
  pathname,
}) => {
  const siteMetadata = useSiteMetadata();

  const metaDescription = description || siteMetadata.description;
  const image =
    metaImage && metaImage.src
      ? `${siteMetadata.siteUrl}${metaImage.src}`
      : null;
  const canonical = pathname ? `${siteMetadata.siteUrl}${pathname}` : null;

  const allMetaTags = [
    {
      name: 'description',
      content: metaDescription,
    },
    {
      name: 'keywords',
      content: siteMetadata.keywords.join(','),
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: metaDescription,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:creator',
      content: siteMetadata.author,
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: metaDescription,
    },
  ]
    .concat(
      metaImage
        ? [
            {
              property: 'og:image',
              content: image,
            },
            {
              property: 'og:image:width',
              content: metaImage.width,
            },
            {
              property: 'og:image:height',
              content: metaImage.height,
            },
            {
              name: 'twitter:card',
              content: 'summary_large_image',
            },
          ]
        : [
            {
              name: 'twitter:card',
              content: 'summary',
            },
          ]
    )
    .concat(meta);

  return (
    <Helmet
      titleTemplate={`%s | ${siteMetadata.title}`}
      defaultTitle={siteMetadata.title}
    >
      <html lang={lang} />
      <title lang={lang}>{title}</title>

      {canonical && <link rel='canonical' href={canonical} />}

      {allMetaTags.map((metaProps, i) => (
        <meta key={i} {...metaProps} />
      ))}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
};

SEO.defaultProps = {
  description: '',
  lang: 'en',
  meta: [],
};

export default SEO;
