import React from 'react';
import { graphql } from 'gatsby';
import { Grid } from 'semantic-ui-react';
import styled from '@emotion/styled';

import { Layout, CategoryCard, Searcher } from '../components';
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
    <Layout count={data.allTools.totalCount}>
      <SEO title="Home" />
      {/* {data.stars_query.edges.map(node => `${node.node.name}: ${node.node.fields.githubData!.stars}`)}; */}
      <Searcher allTools={data.allTools.edges} />
      <StyledGrid divided="vertically" centered>
        {
          activeCategories.map(category => (
            <CategoryCard
              key={category}
              code={category as CategoriesCodes}
              count={data[category] ? data[category].totalCount : 0}
              npmTops={data[`${category}_npm_tops`] ? data[`${category}_npm_tops`].edges : undefined}
              githubTops={data[`${category}_github_tops`] ? data[`${category}_github_tops`].edges : undefined}
            />
          ))
        }
      </StyledGrid>
    </Layout>
  );
};

export default IndexPage;

const StyledGrid = styled(Grid)`
  &&& {
    flex-direction: column;
    align-items: center;
  }
`;

export const query = graphql`
query indexQuery {
  allTools: allContentfulToolEntry(sort: {fields: fields___githubData___stars, order: DESC}) {
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
  js_npm_tops: allContentfulToolEntry(filter: {category: {eq: "js"}, fields: {npmData: {downloads: {gt: 0}}}}, sort: {fields: fields___npmData___downloads, order: DESC}, limit: 5) {
    edges {
      node {
        ...CategoryTopsFragment
      }
    }
  }
  js_github_tops: allContentfulToolEntry(filter: {category: {eq: "js"}, fields: {githubData: {stars: {gt: 0}}}}, sort: {fields: fields___githubData___stars, order: DESC}, limit: 5) {
    edges {
      node {
        ...CategoryTopsFragment
      }
    }
  }
  jam_npm_tops: allContentfulToolEntry(filter: {category: {eq: "jam"}, fields: {npmData: {downloads: {gt: 0}}}}, sort: {fields: fields___npmData___downloads, order: DESC}, limit: 5) {
    edges {
      node {
        ...CategoryTopsFragment
      }
    }
  }
  jam_github_tops: allContentfulToolEntry(filter: {category: {eq: "jam"}, fields: {githubData: {stars: {gt: 0}}}}, sort: {fields: fields___githubData___stars, order: DESC}, limit: 5) {
    edges {
      node {
        ...CategoryTopsFragment
      }
    }
  }
  css_npm_tops: allContentfulToolEntry(filter: {category: {eq: "css"}, fields: {npmData: {downloads: {gt: 0}}}}, sort: {fields: fields___npmData___downloads, order: DESC}, limit: 5) {
    edges {
      node {
        ...CategoryTopsFragment
      }
    }
  }
  css_github_tops: allContentfulToolEntry(filter: {category: {eq: "css"}, fields: {githubData: {stars: {gt: 0}}}}, sort: {fields: fields___githubData___stars, order: DESC}, limit: 5) {
    edges {
      node {
        ...CategoryTopsFragment
      }
    }
  }
  build_npm_tops: allContentfulToolEntry(filter: {category: {eq: "build"}, fields: {npmData: {downloads: {gt: 0}}}}, sort: {fields: fields___npmData___downloads, order: DESC}, limit: 5) {
    edges {
      node {
        ...CategoryTopsFragment
      }
    }
  }
  build_github_tops: allContentfulToolEntry(filter: {category: {eq: "build"}, fields: {githubData: {stars: {gt: 0}}}}, sort: {fields: fields___githubData___stars, order: DESC}, limit: 5) {
    edges {
      node {
        ...CategoryTopsFragment
      }
    }
  }
  js: allContentfulToolEntry(filter: {category: {eq: "js"}}) {
    totalCount
  }
  jam: allContentfulToolEntry(filter: {category: {eq: "jam"}}) {
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
