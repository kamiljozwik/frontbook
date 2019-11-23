import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SubcategoriesList } from '../components';
import { SEO } from '../components/helpers';
import { categoriesNames, CategoryPage } from '../shared';

const JavaScriptPage = ({ data }: CategoryPage) => (
  <Layout
    pageType="category"
    category="js"
    subcategories={data.allContentfulToolEntry.distinct}
    color={categoriesNames.js.color}
  >
    <SEO title={categoriesNames.js.name} />
    <SubcategoriesList subcategories={data.allContentfulToolEntry.distinct} />
  </Layout>
);

export const query = graphql`
  query jsSubcategoriesQuery {
    allContentfulToolEntry(filter: { category: { eq: "js" } }) {
      distinct(field: subcategory)
    }
  }
`;

export default JavaScriptPage;
