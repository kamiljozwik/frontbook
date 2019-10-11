import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components';
import { SEO } from '../components/helpers';
import { CardGroup } from '../components/NonTables';
import { categoriesNames, CategoryPageNoSubcategories } from '../shared';

const SEOPage = ({ data }: CategoryPageNoSubcategories) => (
  <Layout category="seo" color={categoriesNames.seo.color}>
    <SEO title={categoriesNames.seo.name} />
    <CardGroup items={data.allContentfulToolEntry.edges} />
  </Layout>
);

export const query = graphql`
  query seoSubcategoriesQuery {
    allContentfulToolEntry(filter: {subcategory: {eq: "seo_empty"}}) {
      edges {
        node {
          ...ToolsDataFragment
        }
      }
    }
  }
`;

export default SEOPage;
