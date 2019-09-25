import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components';
import SEO from '../components/seo';
import { ToolsTable } from '../components/Tables';
import { categoriesNames, CategoryPageNoSubcategories } from '../shared';

const TaskPage = ({ data }: CategoryPageNoSubcategories) => (
  <Layout category={categoriesNames.task.name}>
    <SEO title={categoriesNames.task.name} />
    <ToolsTable items={data.allContentfulToolEntry.edges} />
  </Layout>
);

export const query = graphql`
  query taskSubcategoriesQuery {
    allContentfulToolEntry(filter: {subcategory: {eq: "task_empty"}}) {
      edges {
        node {
          ...ToolsDataFragment
        }
      }
    }
  }
`;

export default TaskPage;
