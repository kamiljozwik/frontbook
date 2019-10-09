import React from 'react';
import { graphql } from 'gatsby';
import { Grid, Segment } from 'semantic-ui-react';

import { Layout, SubcategoriesList } from '../components';
import { SEO } from '../components/helpers';
import { categoriesNames, CategoryPage } from '../shared';

const CSSPage = ({ data }: CategoryPage) => (
  <Layout category={categoriesNames.css.name} color={categoriesNames.css.color}>
    <SEO title={categoriesNames.css.name} />
    <Grid columns={2} centered relaxed >
      <SubcategoriesList subcategories={data.allContentfulToolEntry.distinct} />
    </Grid>
  </Layout>
);

export const query = graphql`
  query cssSubcategoriesQuery {
    allContentfulToolEntry(filter: {category: {eq: "css"}}) {
      distinct(field: subcategory)
      totalCount
    }
  }
`;

export default CSSPage;
