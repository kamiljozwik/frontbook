import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  lang?: string;
  meta?: any[];
}

const defaultImage = 'https://frontbook.s3-eu-west-1.amazonaws.com/images/ogImage.png';
const defaultUrl = 'https://frontbook.dev/';

export function SEO({ description = '', lang = 'en', meta = [], title, image = defaultImage, url = defaultUrl }: SEOProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
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
          property: 'og:image',
          content: image,
        },
        {
          property: 'og:url',
          content: url,
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:image',
          content: image,
        },
        {
          name: 'twitter:creator',
          content: '@jozwikk',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}
