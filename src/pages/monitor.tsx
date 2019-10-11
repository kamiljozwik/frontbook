import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components';
import { SEO } from '../components/helpers';
import { CardGroup } from '../components/NonTables';
import { categoriesNames, CategoryPageNoSubcategories } from '../shared';

const MonitorPage = ({ data }: CategoryPageNoSubcategories) => (
  <Layout category="monitor" color={categoriesNames.monitor.color}>
    <SEO title={categoriesNames.monitor.name} />
    <CardGroup items={data.allContentfulToolEntry.edges} />
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
