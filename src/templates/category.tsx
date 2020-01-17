import React from 'react';
import { graphql, Link } from 'gatsby';

import { Layout, SubcategoriesList, ToolsTable, CardGroup, TopsToolsList } from '../components';
import { SEO } from '../components/helpers';
import { categoriesNames, CategoriesCodes, LinkEntry, SubcategoryNode, colors, activeCategories, mq } from '../shared';
import styled from '@emotion/styled';

interface SubcategoryEdges {
  edges: SubcategoryNode[];
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

const WithSubcategories = ({ data }: QueryData) => {
  return <SubcategoriesList subcategories={data.subcategories.distinct} />;
};

const Stats = ({ category, npmTops, githubTops }: StatsProps) => {
  return (
    <StatsWrapper color={categoriesNames[category].color}>
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

const NavigationItems = () => (
  <NavList>
    {activeCategories.map(category => (
      <NavItem to={`/${category}`}>{category}</NavItem>
    ))}
  </NavList>
);

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
      <FixedNavigation>
        <NavigationItems />
      </FixedNavigation>
      {withStats.includes(categoryCode) && <Stats category={categoryCode} npmTops={npmTops} githubTops={githubTops} />}
      {withSubcategories.includes(categoryCode) ? (
        <WithSubcategories data={data} />
      ) : (
        <NoSubcategories categoryCode={categoryCode} data={data} />
      )}
    </Layout>
  );
};

const StatsWrapper = styled.div`
  display: block;
  border-style: solid;
  border-image: linear-gradient(to right, rgba(0, 0, 0, 0), ${props => props.color}, rgba(0, 0, 0, 0)) 0% 0% 100% 0%;
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

const FixedNavigation = styled.div`
  position: fixed;
  padding-right: 50px;
  left: -60px;
  transform: translateX(0px);
  top: 20vh;
  transition: 0.5s;
  ${mq({
    display: ['none', 'none', 'block', 'block', 'block'],
  })}
  &:hover {
    transform: translateX(60px);
  }
`;

const NavList = styled.ul`
  margin: 0;
  transition: 0.5s;
  &:hover {
    color: white;
  }
`;

const NavItem = styled(Link)`
  list-style: none;
  margin: 0;
  width: 80px;
  height: 60px;
  background: ${colors.darkBlue};
  text-align: center;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: white;
    filter: drop-shadow(-3px 2px 5px rgba(0, 0, 0, 0.5));
  }
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
