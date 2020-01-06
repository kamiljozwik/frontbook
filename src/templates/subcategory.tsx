import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SEO, ToolsTable, CardGroup } from '../components';
import { categoriesNames, nonTableSubcategories } from '../shared';
import { CategoriesCodes, SubcategoryNode, LinkEntry } from '../shared/types';

interface SubcategoryProps {
  data: {
    subcategory: {
      edges: SubcategoryNode[];
    };
    subcategories: {
      distinct: string[];
    };
    links: {
      edges: LinkEntry[];
    };
  };
  pageContext: {
    subcategory: string;
  };
}

export default ({ data, pageContext }: SubcategoryProps) => {
  const category = pageContext.subcategory.split('_')[0] as CategoriesCodes;
  const subcategory = pageContext.subcategory.split('_')[1];
  const subcategories = data.subcategories.distinct.filter(el => el.split('_')[0] === category);
  const links = data.links.edges;
  return (
    <Layout
      pageType="category"
      category={category}
      subcategory={subcategory}
      subcategories={subcategories}
      color={categoriesNames[category].color}
    >
      <SEO title="Tools list" />
      {nonTableSubcategories.includes(pageContext.subcategory) ? (
        <CardGroup items={data.subcategory.edges} links={links} />
      ) : (
        <ToolsTable items={data.subcategory.edges} links={links} />
      )}
    </Layout>
  );
};

export const query = graphql`
  query($subcategory: String!) {
    subcategory: allContentfulToolEntry(filter: { subcategory: { eq: $subcategory } }) {
      edges {
        node {
          ...ToolsDataFragment
        }
      }
    }
    subcategories: allContentfulToolEntry {
      distinct(field: subcategory)
    }
    links: allContentfulLinksEntry(filter: { subcategory: { eq: $subcategory } }) {
      edges {
        node {
          title
          url
        }
      }
    }
  }
`;
