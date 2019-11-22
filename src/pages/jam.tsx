import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SubcategoriesList } from '../components';
import { SEO } from '../components/helpers';
import { categoriesNames, CategoryPage } from '../shared';

const JAMScriptPage = ({ data }: CategoryPage) => (
  <Layout category="jam" subcategories={data.allContentfulToolEntry.distinct} color={categoriesNames.jam.color}>
    <SEO title={categoriesNames.jam.name} />
    <SubcategoriesList subcategories={data.allContentfulToolEntry.distinct} />
  </Layout>
);

export const query = graphql`
  query jamSubcategoriesQuery {
    allContentfulToolEntry(filter: { category: { eq: "jam" } }) {
      distinct(field: subcategory)
    }
  }
`;

export default JAMScriptPage;
