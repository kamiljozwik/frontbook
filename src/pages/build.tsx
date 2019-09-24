import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components';
import SEO from '../components/seo';
import { ToolsTable } from '../components/Tables';
import { categoriesNames, CategoryPage } from '../shared';

const BuildPage = ({ data }: CategoryPage) => (
  <Layout category={categoriesNames.build.name}>
    <SEO title={categoriesNames.build.name} />
    <ToolsTable items={data.allContentfulToolEntry.edges} />
  </Layout>
);

export const query = graphql`
  query buildSubcategoriesQuery {
    allContentfulToolEntry(filter: {subcategory: {eq: "build_empty"}}) {
      edges {
        node {
          ...ToolsDataFragment
        }
      }
    }
  }
`;

export default BuildPage;
