import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components';
import { SEO } from '../components/helpers';
import { ToolsTable } from '../components/Tables';
import { categoriesNames, CategoryPageNoSubcategories } from '../shared';

const BuildPage = ({ data }: CategoryPageNoSubcategories) => (
  <Layout category="build" color={categoriesNames.build.color}>
    <SEO title={categoriesNames.build.name} />
    <ToolsTable items={data.items.edges} links={data.links.edges}/>
  </Layout>
);

export const query = graphql`
  query buildSubcategoriesQuery {
    items: allContentfulToolEntry(filter: {subcategory: {eq: "build_empty"}}) {
      edges {
        node {
          ...ToolsDataFragment
        }
      }
    }
    links: allContentfulLinksEntry(filter: {subcategory: {eq: "build_empty"}}) {
      edges {
        node {
          title
          url
        }
      }
    }
  }
`;

export default BuildPage;
