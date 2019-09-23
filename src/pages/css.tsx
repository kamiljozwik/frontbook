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

const CSSPage = ({ data }: CategoryPage) => (
  <Layout category={categoriesNames.css.name}>
    <SEO title={categoriesNames.css.name} />
    <Grid columns={2} centered relaxed >
      {
        data.allContentfulToolEntry.distinct
          .map((name: any) => <Subcategory key={name} name={name} />)
      }
    </Grid>
  </Layout>
);

export const query = graphql`
  query cssSubcategoriesQuery {
    allContentfulToolEntry(filter: {category: {eq: "css"}}) {
      distinct(field: subcategory)
    }
  }
`;

export default CSSPage;
