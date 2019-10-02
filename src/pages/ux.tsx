import React from 'react';
import { graphql } from 'gatsby';
import { Grid, Segment } from 'semantic-ui-react';

import { Layout, SubcategoriesList } from '../components';
import { SEO } from '../components/helpers';
import { categoriesNames, CategoryPage } from '../shared';

const UXPage = ({ data }: CategoryPage) => (
  <Layout category={categoriesNames.ux.name}>
    <SEO title={categoriesNames.ux.name} />
    <Grid columns={2} centered relaxed >
      <SubcategoriesList subcategories={data.allContentfulToolEntry.distinct} />
    </Grid>
  </Layout>
);

export const query = graphql`
  query uxSubcategoriesQuery {
    allContentfulToolEntry(filter: {category: {eq: "ux"}}) {
      distinct(field: subcategory)
      totalCount
    }
  }
`;

export default UXPage;
