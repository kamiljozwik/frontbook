import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components';
import SEO from '../components/seo';
import { ToolsTable } from '../components/Tables';
import { categoriesNames, CategoryPageNoSubcategories } from '../shared';

const IdePage = ({ data }: CategoryPageNoSubcategories) => (
  <Layout category={categoriesNames.ide.name}>
    <SEO title={categoriesNames.ide.name} />
    <ToolsTable items={data.allContentfulToolEntry.edges} />
  </Layout>
);

export const query = graphql`
  query ideSubcategoriesQuery {
    allContentfulToolEntry(filter: {subcategory: {eq: "ide_empty"}}) {
      edges {
        node {
          ...ToolsDataFragment
        }
      }
    }
  }
`;

export default IdePage;
