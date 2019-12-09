import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SubcategoriesList, ToolsTable, CardGroup } from '../components';
import { SEO } from '../components/helpers';
import { categoriesNames, CategoriesCodes, LinkEntry, SubcategoryNode } from '../shared';

interface QueryData {
  data: {
    items: {
      edges: SubcategoryNode[];
    };
    links: {
      edges: LinkEntry[];
    };
    subcategories: {
      distinct: string[];
    };
  };
}

interface CategoryTemplate extends QueryData {
  pageContext: {
    category: CategoriesCodes;
  };
}

interface CategoryPageNoSubcategories extends QueryData {
  categoryCode: string;
}

const NoSubcategories = ({ categoryCode, data }: CategoryPageNoSubcategories) => {
  return categoryCode === 'frontops' ? (
    <ToolsTable items={data.items.edges} links={data.links.edges} />
  ) : (
    <CardGroup items={data.items.edges} links={data.links.edges} />
  );
};

const WithSubcategories = ({ data }: QueryData) => {
  return <SubcategoriesList subcategories={data.subcategories.distinct} />;
};

export default ({ data, pageContext }: CategoryTemplate) => {
  const withSubcategories = ['js', 'css', 'jam', 'ux'];
  const categoryCode = pageContext.category.split('_')[0] as CategoriesCodes;
  return (
    <Layout
      pageType="category"
      category={categoryCode}
      subcategories={data.subcategories.distinct}
      color={categoriesNames[categoryCode].color}
    >
      <SEO title={categoriesNames[categoryCode].name} />
      {withSubcategories.includes(categoryCode) ? (
        <WithSubcategories data={data} />
      ) : (
        <NoSubcategories categoryCode={categoryCode} data={data} />
      )}
    </Layout>
  );
};

export const query = graphql`
  query($category: String!) {
    subcategories: allContentfulToolEntry(filter: { category: { eq: $category } }) {
      distinct(field: subcategory)
    }
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
