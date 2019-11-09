import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components';
import { SEO } from '../components/helpers';
import { ToolsTable } from '../components/Tables';
import { categoriesNames, CategoryPageNoSubcategories } from '../shared';

const IdePage = ({ data }: CategoryPageNoSubcategories) => (
  <Layout category="ide" color={categoriesNames.ide.color}>
    <SEO title={categoriesNames.ide.name} />
    <ToolsTable items={data.items.edges} links={data.links.edges}/>
  </Layout>
);

export const query = graphql`
  query ideSubcategoriesQuery {
    items: allContentfulToolEntry(filter: {subcategory: {eq: "ide_empty"}}) {
      edges {
        node {
          ...ToolsDataFragment
        }
      }
    }
    links: allContentfulLinksEntry(filter: {subcategory: {eq: "ide_empty"}}) {
      edges {
        node {
          title
          url
        }
      }
    }
  }
`;

export default IdePage;
