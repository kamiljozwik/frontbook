import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components';
import { SEO } from '../components/helpers';
import { CardGroup } from '../components/NonTables';
import { categoriesNames, CategoryPageNoSubcategories } from '../shared';

const UtilsPage = ({ data }: CategoryPageNoSubcategories) => (
  <Layout pageType="category" category="utils" color={categoriesNames.utils.color}>
    <SEO title={categoriesNames.utils.name} />
    <CardGroup items={data.items.edges} links={data.links.edges} />
  </Layout>
);

export const query = graphql`
  query utilsSubcategoriesQuery {
    items: allContentfulToolEntry(filter: { subcategory: { eq: "utils_empty" } }) {
      edges {
        node {
          ...ToolsDataFragment
        }
      }
    }
    links: allContentfulLinksEntry(filter: { subcategory: { eq: "utils_empty" } }) {
      edges {
        node {
          title
          url
        }
      }
    }
  }
`;

export default UtilsPage;
