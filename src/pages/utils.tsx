import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components';
import { SEO } from '../components/helpers';
import { ToolsTable } from '../components/Tables';
import { categoriesNames, CategoryPageNoSubcategories } from '../shared';

const UtilsPage = ({ data }: CategoryPageNoSubcategories) => (
  <Layout category={categoriesNames.utils.name} color={categoriesNames.utils.color}>
    <SEO title={categoriesNames.utils.name} />
    <ToolsTable items={data.allContentfulToolEntry.edges} />
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
