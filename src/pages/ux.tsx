import React from 'react';
import { graphql } from 'gatsby';
import { Grid } from 'semantic-ui-react';

import { Layout, SubcategoryCard } from '../components';
import SEO from '../components/seo';
import { categoriesNames } from '../shared';

interface CategoryPage {
  data: {
    allContentfulToolEntry: {
      distinct: string[]
    }
  };
}

const UXPage = ({ data }: CategoryPage) => (
  <Layout category={categoriesNames.ux.name}>
    <SEO title={categoriesNames.ux.name} />
    <Grid columns={2} centered relaxed >
      {
        data.allContentfulToolEntry.distinct
          .map((name: any) => <SubcategoryCard key={name} name={name} />)
      }
    </Grid>
  </Layout>
);

export const query = graphql`
  query uxSubcategoriesQuery {
    allContentfulToolEntry(filter: {category: {eq: "ux"}}) {
      distinct(field: subcategory)
    }
  }
`;

export default UXPage;
