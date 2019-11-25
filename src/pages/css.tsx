import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SubcategoriesList } from '../components';
import { SEO } from '../components/helpers';
import { categoriesNames, CategoryPage } from '../shared';

const CSSPage = ({ data }: CategoryPage) => (
  <Layout
    pageType="category"
    category="css"
    subcategories={data.allContentfulToolEntry.distinct}
    color={categoriesNames.css.color}
  >
    <SEO title={categoriesNames.css.name} />
    <SubcategoriesList subcategories={data.allContentfulToolEntry.distinct} />
  </Layout>
);

export const query = graphql`
  query cssSubcategoriesQuery {
    allContentfulToolEntry(filter: { category: { eq: "css" } }) {
      distinct(field: subcategory)
      totalCount
    }
  }
`;

export default CSSPage;
