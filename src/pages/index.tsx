import React from 'react';
import { Link, graphql } from 'gatsby';
import { Button, Segment, Header } from 'semantic-ui-react';

import { Layout } from '../components';
import SEO from '../components/seo';
import { categoriesNames, CategoriesCodes, activeCategories, SubcategoryNode } from '../shared';

interface CategorySegmentProps {
  code: CategoriesCodes;
  count: number;
  tops?: SubcategoryNode[];
}

interface IndexPageProps {
  data: {
    [index: string]: {
      totalCount: number;
      edges: SubcategoryNode[];
    };
  };
}

const CategorySegment = ({ code, count, tops }: CategorySegmentProps) => (
  <Segment>
    <Header size="large">{categoriesNames[code].name}</Header>
    <Segment basic>Count: {count}</Segment>
    <Segment basic>{tops && tops.map(top => top.node.name)}</Segment>
    <Segment basic>{categoriesNames[code].info}</Segment>
    <Button primary as={Link} to={`/${code}/`}>More</Button>
  </Segment>
);

const IndexPage = ({ data }: IndexPageProps) => {
  return (
    <Layout category="Frontbook">
      <SEO title="Home" />
      <Segment basic>
        {
          activeCategories.map(category => (
            <CategorySegment
              key={category}
              code={category as CategoriesCodes}
              count={data[category] ? data[category].totalCount : 0}
              tops={data[`${category}_tops`] ? data[`${category}_tops`].edges : undefined}
            />
          ))
        }
      </Segment>
    </Layout>
  );
};

export const query = graphql`
query indexQuery {
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
}
`;

export default IndexPage;
