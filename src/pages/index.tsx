import React from 'react';
import { graphql } from 'gatsby';
import { Segment, Grid } from 'semantic-ui-react';

import { Layout, CategoryCard } from '../components';
import { SEO } from '../components/helpers';
import { CategoriesCodes, activeCategories, SubcategoryNode } from '../shared';

interface IndexPageProps {
  data: {
    [index: string]: {
      totalCount: number;
      edges: SubcategoryNode[];
    };
  };
}

const IndexPage = ({ data }: IndexPageProps) => {
  return (
    <Layout category="index" count={data.allTools.totalCount}>
      <SEO title="Home" />
      {/* {data.stars_query.edges.map(node => `${node.node.name}: ${node.node.fields.githubData!.stars}`)}; */}
      <Grid divided="vertically" centered>
        {
          activeCategories.map(category => (
            <CategoryCard
              key={category}
              code={category as CategoriesCodes}
              count={data[category] ? data[category].totalCount : 0}
              tops={data[`${category}_tops`] ? data[`${category}_tops`].edges : undefined}
            />
          ))
        }
      </Grid>
    </Layout>
  );
};

export const query = graphql`
query indexQuery {
  allTools: allContentfulToolEntry {
    totalCount
  }
  stars_query: allContentfulToolEntry(sort: {fields: fields___githubData___stars, order: DESC}, limit: 5, filter: {fields: {githubData: {stars: {gt: 0}}}}) {
    edges {
      node {
        name
        fields {
          githubData {
            stars
          }
        }
      }
    }
  }
  js_tops: allContentfulToolEntry(filter: {category: {eq: "js"}, fields: {npmData: {downloads: {gt: 0}}}}, sort: {fields: fields___npmData___downloads, order: DESC}, limit: 5) {
    edges {
      node {
        ...CategoryTopsFragment
      }
    }
  }
  css_tops: allContentfulToolEntry(filter: {category: {eq: "css"}, fields: {npmData: {downloads: {gt: 0}}}}, sort: {fields: fields___npmData___downloads, order: DESC}, limit: 5) {
    edges {
      node {
        ...CategoryTopsFragment
      }
    }
  }
  build_tops: allContentfulToolEntry(filter: {category: {eq: "build"}, fields: {npmData: {downloads: {gt: 0}}}}, sort: {fields: fields___npmData___downloads, order: DESC}, limit: 5) {
    edges {
      node {
        ...CategoryTopsFragment
      }
    }
  }
  js: allContentfulToolEntry(filter: {category: {eq: "js"}}) {
    totalCount
  }
  css: allContentfulToolEntry(filter: {category: {eq: "css"}}) {
    totalCount
  }
  build: allContentfulToolEntry(filter: {category: {eq: "build"}}) {
    totalCount
  }
  seo: allContentfulToolEntry(filter: {category: {eq: "seo"}}) {
    totalCount
  }
  monitor: allContentfulToolEntry(filter: {category: {eq: "monitor"}}) {
    totalCount
  }
  ux: allContentfulToolEntry(filter: {category: {eq: "ux"}}) {
    totalCount
  }
  utils: allContentfulToolEntry(filter: {category: {eq: "utils"}}) {
    totalCount
  }
}
`;

export default IndexPage;
