import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components';
import { ToolsTable } from '../components/Tables';
import { categoriesNames } from '../shared';
import { SubcategoryProps, CategoriesCodes } from '../shared/types';

export default ({ data, pageContext }: SubcategoryProps) => {
  const category = pageContext.subcategory.split('_')[0] as CategoriesCodes;
  const subcategory = pageContext.subcategory.split('_')[1];
  return (
    <Layout category={category} subcategory={subcategory} color={categoriesNames[category].color}>
      <ToolsTable items={data.allContentfulToolEntry.edges} />
    </Layout>
  );
};

export const query = graphql`
  query($subcategory: String!) {
    allContentfulToolEntry(filter: {subcategory: {eq: $subcategory}}) {
      edges {
        node {
          ...ToolsDataFragment
        }
      }
    }
  }
`;
