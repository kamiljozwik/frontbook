import React from 'react';
import { graphql } from 'gatsby';

import { Layout, Searcher, Leaderboard, CategoriesGrid } from '../components';
import { SEO } from '../components/helpers';
import { SubcategoryNode } from '../shared';

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
    <Layout pageType="landing">
      <SEO title="Frontbook" />
      <Searcher />
      <Leaderboard githubTops={data.stars_query.edges} npmTops={data.downloads_query.edges} />
      <CategoriesGrid data={data} />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query indexQuery {
    stars_query: allContentfulToolEntry(
      sort: { fields: fields___githubData___stars, order: DESC }
      limit: 10
      filter: { fields: { githubData: { stars: { gt: 0 } } } }
    ) {
      edges {
        node {
          ...CategoryTopsFragment
        }
      }
    }
    downloads_query: allContentfulToolEntry(
      sort: { fields: fields___npmData___downloads, order: DESC }
      limit: 10
      filter: { fields: { npmData: { downloads: { gt: 0 } } } }
    ) {
      edges {
        node {
          ...CategoryTopsFragment
        }
      }
    }
    js: allContentfulToolEntry(filter: { category: { eq: "js" } }) {
      totalCount
    }
    jam: allContentfulToolEntry(filter: { category: { eq: "jam" } }) {
      totalCount
    }
    css: allContentfulToolEntry(filter: { category: { eq: "css" } }) {
      totalCount
    }
    frontops: allContentfulToolEntry(filter: { category: { eq: "frontops" } }) {
      totalCount
    }
    seo: allContentfulToolEntry(filter: { category: { eq: "seo" } }) {
      totalCount
    }
    monitor: allContentfulToolEntry(filter: { category: { eq: "monitor" } }) {
      totalCount
    }
    ux: allContentfulToolEntry(filter: { category: { eq: "ux" } }) {
      totalCount
    }
    utils: allContentfulToolEntry(filter: { category: { eq: "utils" } }) {
      totalCount
    }
  }
`;
