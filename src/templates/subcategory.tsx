import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
export default ({ data }: any) => {
  const subcategoryTools = data.allContentfulToolEntry.nodes;
  console.log(subcategoryTools);
  return (
    <Layout>
      <div>
        <h1>SUBCATEGORY PAGE</h1>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($subcategory: String!) {
    allContentfulToolEntry(filter: {subcategory: {eq: $subcategory}}) {
      nodes {
        subcategory
        name
      }
    }
  }
`;
