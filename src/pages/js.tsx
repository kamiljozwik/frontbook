import React from 'react';
import { graphql } from 'gatsby';
import { Grid, Segment } from 'semantic-ui-react';

import { Layout, SubcategoriesList } from '../components';
import { SEO } from '../components/helpers';
import { categoriesNames, CategoryPage } from '../shared';

const JavaScriptPage = ({ data }: CategoryPage) => (
  <Layout category={categoriesNames.js.name}>
    <SEO title={categoriesNames.js.name} />
    <Grid columns={2} centered relaxed >
      <SubcategoriesList
        subcategories={data.allContentfulToolEntry.distinct}
      />
    </Grid>
  </Layout>
);

export const query = graphql`
  query jsSubcategoriesQuery {
    allContentfulToolEntry(filter: {category: {eq: "js"}}) {
      distinct(field: subcategory)
    }
  }
`;

export default JavaScriptPage;
