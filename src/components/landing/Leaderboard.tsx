import React from 'react';
import styled from '@emotion/styled';
import { Header } from 'semantic-ui-react';

import { TopsToolsList } from './';
import { SubcategoryNode } from '../../shared';
import { Trophy } from '../SVG';
import { mq } from '../layout';

interface LeaderboardProps {
  npmTops: SubcategoryNode[];
  githubTops: SubcategoryNode[];
}

export const Leaderboard = ({npmTops, githubTops}: LeaderboardProps) => {
  return (
    <FlexWrapper>
      <ResponsiveTrophy />
      <LeaderboardWrapper>
        <Header size="huge" textAlign="center">Tools leaderboard</Header>
          <TopsToolsList.Wrapper horizontal style={{ width: '100%' }}>
            <TopsToolsList.Segment>{npmTops ? <TopsToolsList tops={npmTops} type="npm" /> : null}</TopsToolsList.Segment>
            <TopsToolsList.Segment>{githubTops ? <TopsToolsList tops={githubTops} type="github" /> : null}</TopsToolsList.Segment>
          </TopsToolsList.Wrapper>
      </LeaderboardWrapper>
      <ResponsiveTrophy />
    </FlexWrapper>
  );
};

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  padding-top: 20px;
  border-width: 3px;
  border-style: solid;
  border-image: linear-gradient( to right,rgba(0,0,0,0),rgba(23, 124, 190, 0.5),rgba(0,0,0,0) ) 100% 0% 100% 0%;
`;

const LeaderboardWrapper = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  margin: 0 5%;
`;

const ResponsiveTrophy = styled(Trophy)`
  ${mq({
    display: ['none', 'none', 'initial', 'initial', 'initial'],
  })}
`;
