import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

import { Layout, TopsTool } from '../components';
import { SEO } from '../components/helpers';
import { SubcategoryNode, BasicLoader } from '../shared';
import styled from '@emotion/styled';

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

const NpmRow = ({ index, style, data }: ListChildComponentProps) => {
  return <TopsTool style={style} tool={data[index].node} type="npm" />;
};
const GithubRow = ({ index, style, data }: ListChildComponentProps) => {
  return <TopsTool style={style} tool={data[index].node} type="github" />;
};

const commonProps = {
  height: 800,
  width: 300,
  itemSize: 32,
};

const LeaderboardPage = ({ data }: LeaderboardData) => {
  const [statData, setStatData] = useState();
  useEffect(() => {
    setStatData(data);
  }, [data]);
  return (
    <Layout pageType="page" title="Front-end tools leaderboard" color="#039aff">
      <SEO title="leaderboard" />
      {statData ? (
        <ListWrapper>
          <ToolsSection>
            <ListName>Top weekly downloads:</ListName>
            <ToolsList itemCount={statData.downloads.edges.length} itemData={statData.downloads.edges} {...commonProps}>
              {NpmRow}
            </ToolsList>
          </ToolsSection>
          <ToolsSection>
            <ListName>Top starred repositories:</ListName>
            <ToolsList itemCount={statData.stars.edges.length} itemData={statData.stars.edges} {...commonProps}>
              {GithubRow}
            </ToolsList>
          </ToolsSection>
        </ListWrapper>
      ) : (
        <BasicLoader />
      )}
    </Layout>
  );
};

const ListWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ToolsSection = styled.div`
  position: relative;
  margin: 20px 50px;
`;

const ListName = styled.h3`
  position: relative;
`;

const ToolsList = styled(FixedSizeList)`
  box-shadow: inset 0px -10px 10px -10px rgba(0, 0, 0, 0.3);
`;

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
