import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SubcategoriesList } from '../components';
import { SEO } from '../components/helpers';
import { categoriesNames, CategoryPage } from '../shared';

export default ({ data, pageContext }: CategoryPage) => {
  const categoryCode = pageContext!.category;
  return (
    <Layout
      pageType="category"
      category={categoryCode}
      subcategories={data.allContentfulToolEntry.distinct}
      color={categoriesNames[categoryCode].color}
    >
      <SEO title={categoriesNames[categoryCode].name} />
      <SubcategoriesList subcategories={data.allContentfulToolEntry.distinct} />
    </Layout>
  );
};

export const query = graphql`
  query($category: String!) {
    allContentfulToolEntry(filter: { category: { eq: $category } }) {
      distinct(field: subcategory)
    }
  }
`;
