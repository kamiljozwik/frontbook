import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../components';
import { SEO } from '../components/helpers';
import { CardGroup } from '../components/NonTables';
import { categoriesNames, CategoryPageNoSubcategories, CategoriesCodes } from '../shared';

export default ({ data, pageContext }: CategoryPageNoSubcategories) => {
  const categoryCode = pageContext!.category.split('_')[0] as CategoriesCodes;
  return (
    <Layout pageType="category" category={categoryCode} color={categoriesNames[categoryCode].color}>
      <SEO title={categoriesNames[categoryCode].name} />
      <CardGroup items={data.items.edges} links={data.links.edges} />
    </Layout>
  );
};

export const query = graphql`
  query($category: String!) {
    items: allContentfulToolEntry(filter: { subcategory: { eq: $category } }) {
      edges {
        node {
          ...ToolsDataFragment
        }
      }
    }
    links: allContentfulLinksEntry(filter: { subcategory: { eq: $category } }) {
      edges {
        node {
          title
          url
        }
      }
    }
  }
`;
