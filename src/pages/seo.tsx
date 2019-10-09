import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components';
import { SEO } from '../components/helpers';
import { ToolsTable } from '../components/Tables';
import { categoriesNames, CategoryPageNoSubcategories } from '../shared';

const SEOPage = ({ data }: CategoryPageNoSubcategories) => (
  <Layout category={categoriesNames.seo.name} color={categoriesNames.seo.color}>
    <SEO title={categoriesNames.seo.name} />
    <ToolsTable items={data.allContentfulToolEntry.edges} />
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
