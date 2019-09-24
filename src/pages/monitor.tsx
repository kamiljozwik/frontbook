import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components';
import SEO from '../components/seo';
import { ToolsTable } from '../components/Tables';
import { categoriesNames, CategoryPage } from '../shared';

const MonitorPage = ({ data }: CategoryPage) => (
  <Layout category={categoriesNames.monitor.name}>
    <SEO title={categoriesNames.monitor.name} />
    <ToolsTable items={data.allContentfulToolEntry.edges} />
  </Layout>
);

export const query = graphql`
  query monitorSubcategoriesQuery {
    allContentfulToolEntry(filter: {subcategory: {eq: "monitor_empty"}}) {
      edges {
        node {
          ...ToolsDataFragment
        }
      }
    }
  }
`;

export default MonitorPage;
