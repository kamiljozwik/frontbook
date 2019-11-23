import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components';
import { SEO } from '../components/helpers';
import { ToolsTable } from '../components/Tables';
import { categoriesNames, CategoryPageNoSubcategories } from '../shared';

const FrontopsPage = ({ data }: CategoryPageNoSubcategories) => (
  <Layout pageType="category" category="frontops" color={categoriesNames.frontops.color}>
    <SEO title={categoriesNames.frontops.name} />
    <ToolsTable items={data.items.edges} links={data.links.edges} />
  </Layout>
);

export const query = graphql`
  query frontopsSubcategoriesQuery {
    items: allContentfulToolEntry(filter: { subcategory: { eq: "frontops_empty" } }) {
      edges {
        node {
          ...ToolsDataFragment
        }
      }
    }
    links: allContentfulLinksEntry(filter: { subcategory: { eq: "frontops_empty" } }) {
      edges {
        node {
          title
          url
        }
      }
    }
  }
`;

export default FrontopsPage;
