import React from 'react';
import { graphql } from 'gatsby';
import { Grid } from 'semantic-ui-react';

import { Layout, Subcategory } from '../components';
import SEO from '../components/seo';
import { categoriesNames } from '../shared';

interface CategoryPage {
  data: {
    allContentfulToolEntry: {
      distinct: string[]
    }
  };
}

const JavaScriptPage = ({ data }: CategoryPage) => (
  <Layout category={categoriesNames.js.name}>
    <SEO title={categoriesNames.js.name} />
    <Grid columns={2} centered relaxed >
      {
        data.allContentfulToolEntry.distinct
          .map((name: any) => <Subcategory key={name} name={name} />)
      }
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
