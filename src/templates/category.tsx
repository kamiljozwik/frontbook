import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SubcategoriesList, ToolsTable, CardGroup, TopsToolsList, CategoryNav } from '../components';
import { SEO } from '../components/helpers';
import { categoriesNames, CategoriesCodes, LinkEntry, SubcategoryNode, colors } from '../shared';
import styled from '@emotion/styled';

interface SubcategoryEdges {
  edges: SubcategoryNode[];
}

interface WithSubcategoriesProps extends QueryData {
  color?: string;
}

interface QueryData {
  data: {
    items: SubcategoryEdges;
    links: {
      edges: LinkEntry[];
    };
    subcategories: {
      distinct: string[];
    };
    npmTops: SubcategoryEdges;
    githubTops: SubcategoryEdges;
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

interface StatsProps {
  npmTops: SubcategoryEdges;
  githubTops: SubcategoryEdges;
  category: CategoriesCodes;
}

const NoSubcategories = ({ categoryCode, data }: CategoryPageNoSubcategories) => {
  return categoryCode === 'frontops' ? (
    <ToolsTable items={data.items.edges} links={data.links.edges} />
  ) : (
    <CardGroup items={data.items.edges} links={data.links.edges} />
  );
};

const WithSubcategories = ({ data, color }: WithSubcategoriesProps) => {
  return <SubcategoriesList subcategories={data.subcategories.distinct} color={color} />;
};

const Stats = ({ category, npmTops, githubTops }: StatsProps) => {
  return (
    <StatsWrapper>
      <StatsHeader>{`Top 5 ${categoriesNames[category].name} tools`}</StatsHeader>
      <ListWrapper>
        <StatsColumn>
          <TopsToolsList tops={npmTops.edges} type="npm" />
        </StatsColumn>
        <StatsColumn>
          <TopsToolsList tops={githubTops.edges} type="github" />
        </StatsColumn>
      </ListWrapper>
    </StatsWrapper>
  );
};

export default ({ data, pageContext }: CategoryTemplate) => {
  const withSubcategories = ['js', 'css', 'jam', 'ux'];
  const withStats = ['js', 'css', 'jam'];
  const categoryCode = pageContext.category.split('_')[0] as CategoriesCodes;
  const { npmTops, githubTops } = data;
  return (
    <Layout
      pageType="category"
      category={categoryCode}
      subcategories={data.subcategories.distinct}
      color={categoriesNames[categoryCode].color}
    >
      <SEO title={categoriesNames[categoryCode].name} />
      <CategoryNav />
      {withStats.includes(categoryCode) && <Stats category={categoryCode} npmTops={npmTops} githubTops={githubTops} />}
      {withSubcategories.includes(categoryCode) ? (
        <WithSubcategories data={data} color={categoriesNames[categoryCode].color} />
      ) : (
        <NoSubcategories categoryCode={categoryCode} data={data} />
      )}
    </Layout>
  );
};

const StatsWrapper = styled.div`
  margin-bottom: 50px;
`;

const StatsHeader = styled.div`
  font-weight: 600;
  text-align: center;
  color: ${colors.black};
  font-size: 28px;
  margin-bottom: 20px;
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  &&& > div {
    margin: 0;
  }
`;

const StatsColumn = styled.div`
  padding: 16px 16px;
`;

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
    npmTops: allContentfulToolEntry(
      filter: { category: { eq: $category }, fields: { npmData: { downloads: { gt: 0 } } } }
      sort: { fields: fields___npmData___downloads, order: DESC }
      limit: 5
    ) {
      edges {
        node {
          ...CategoryTopsFragment
        }
      }
    }
    githubTops: allContentfulToolEntry(
      filter: { category: { eq: $category }, fields: { githubData: { stars: { gt: 0 } } } }
      sort: { fields: fields___githubData___stars, order: DESC }
      limit: 5
    ) {
      edges {
        node {
          ...CategoryTopsFragment
        }
      }
    }
  }
`;
