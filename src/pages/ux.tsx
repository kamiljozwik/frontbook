import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SubcategoriesList } from '../components';
import { SEO } from '../components/helpers';
import { categoriesNames, CategoryPage } from '../shared';

const UXPage = ({ data }: CategoryPage) => (
  <Layout pageType="category" category="ux" subcategories={data.allContentfulToolEntry.distinct} color={categoriesNames.ux.color}>
    <SEO title={categoriesNames.ux.name} />
    <SubcategoriesList subcategories={data.allContentfulToolEntry.distinct} />
  </Layout>
);

export const query = graphql`
  query uxSubcategoriesQuery {
    allContentfulToolEntry(filter: { category: { eq: "ux" } }) {
      distinct(field: subcategory)
      totalCount
    }
  }
`;

export default UXPage;
