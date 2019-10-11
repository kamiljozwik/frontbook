import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components';
import { SEO } from '../components/helpers';
import { CardGroup } from '../components/NonTables';
import { categoriesNames, CategoryPageNoSubcategories } from '../shared';

const UtilsPage = ({ data }: CategoryPageNoSubcategories) => (
  <Layout category="utils" color={categoriesNames.utils.color}>
    <SEO title={categoriesNames.utils.name} />
    <CardGroup items={data.allContentfulToolEntry.edges} />
  </Layout>
);

export const query = graphql`
  query utilsSubcategoriesQuery {
    allContentfulToolEntry(filter: {subcategory: {eq: "utils_empty"}}) {
      edges {
        node {
          ...ToolsDataFragment
        }
      }
    }
  }
`;

export default UtilsPage;
