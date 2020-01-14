import React from 'react';
import { graphql } from 'gatsby';

import { Layout, Searcher, Leaderboard, Footer, CategoriesGrid } from '../components';
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
      <Searcher allTools={data.allTools.edges} total={data.allTools.totalCount} />
      <Leaderboard githubTops={data.stars_query.edges} npmTops={data.downloads_query.edges} />
      <CategoriesGrid data={data} />
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query indexQuery {
    allTools: allContentfulToolEntry(sort: { fields: fields___githubData___stars, order: DESC }) {
      totalCount
      edges {
        node {
          name
          slogan {
            slogan
          }
          subcategory
          website
          fields {
            githubData {
              stars
            }
            npmData {
              downloads
            }
          }
        }
      }
    }
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
    js_npm_tops: allContentfulToolEntry(
      filter: { category: { eq: "js" }, fields: { npmData: { downloads: { gt: 0 } } } }
      sort: { fields: fields___npmData___downloads, order: DESC }
      limit: 5
    ) {
      edges {
        node {
          ...CategoryTopsFragment
        }
      }
    }
    js_github_tops: allContentfulToolEntry(
      filter: { category: { eq: "js" }, fields: { githubData: { stars: { gt: 0 } } } }
      sort: { fields: fields___githubData___stars, order: DESC }
      limit: 5
    ) {
      edges {
        node {
          ...CategoryTopsFragment
        }
      }
    }
    jam_npm_tops: allContentfulToolEntry(
      filter: { category: { eq: "jam" }, fields: { npmData: { downloads: { gt: 0 } } } }
      sort: { fields: fields___npmData___downloads, order: DESC }
      limit: 5
    ) {
      edges {
        node {
          ...CategoryTopsFragment
        }
      }
    }
    jam_github_tops: allContentfulToolEntry(
      filter: { category: { eq: "jam" }, fields: { githubData: { stars: { gt: 0 } } } }
      sort: { fields: fields___githubData___stars, order: DESC }
      limit: 5
    ) {
      edges {
        node {
          ...CategoryTopsFragment
        }
      }
    }
    css_npm_tops: allContentfulToolEntry(
      filter: { category: { eq: "css" }, fields: { npmData: { downloads: { gt: 0 } } } }
      sort: { fields: fields___npmData___downloads, order: DESC }
      limit: 5
    ) {
      edges {
        node {
          ...CategoryTopsFragment
        }
      }
    }
    css_github_tops: allContentfulToolEntry(
      filter: { category: { eq: "css" }, fields: { githubData: { stars: { gt: 0 } } } }
      sort: { fields: fields___githubData___stars, order: DESC }
      limit: 5
    ) {
      edges {
        node {
          ...CategoryTopsFragment
        }
      }
    }
    frontops_npm_tops: allContentfulToolEntry(
      filter: { category: { eq: "frontops" }, fields: { npmData: { downloads: { gt: 0 } } } }
      sort: { fields: fields___npmData___downloads, order: DESC }
      limit: 5
    ) {
      edges {
        node {
          ...CategoryTopsFragment
        }
      }
    }
    frontops_github_tops: allContentfulToolEntry(
      filter: { category: { eq: "frontops" }, fields: { githubData: { stars: { gt: 0 } } } }
      sort: { fields: fields___githubData___stars, order: DESC }
      limit: 5
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
