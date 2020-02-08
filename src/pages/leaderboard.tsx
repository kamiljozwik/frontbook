import React from 'react';
import { graphql } from 'gatsby';

import { Layout, Leaderboard } from '../components';
import { SEO } from '../components/helpers';
import { SubcategoryNode } from '../shared';

interface LeaderboardData {
  data: {
    stars: {
      edges: SubcategoryNode[];
    };
    downloads: {
      edges: SubcategoryNode[];
    };
  };
}

const LeaderboardPage = ({ data }: LeaderboardData) => (
  <Layout pageType="page" title="Front-end tools leaderboard" color="#039aff">
    <SEO title="leaderboard" />
    <Leaderboard githubTops={data.stars.edges} npmTops={data.downloads.edges} full />
  </Layout>
);

export const query = graphql`
  query leaderboardQuery {
    stars: allContentfulToolEntry(
      sort: { fields: fields___githubData___stars, order: DESC }
      filter: { fields: { githubData: { stars: { gt: 0 } } } }
    ) {
      edges {
        node {
          ...CategoryTopsFragment
        }
      }
    }
    downloads: allContentfulToolEntry(
      sort: { fields: fields___npmData___downloads, order: DESC }
      filter: { fields: { npmData: { downloads: { gt: 0 } } } }
    ) {
      edges {
        node {
          ...CategoryTopsFragment
        }
      }
    }
  }
`;

export default LeaderboardPage;
