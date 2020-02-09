import React from 'react';
import styled from '@emotion/styled';
import { Button } from 'semantic-ui-react';
import { Link } from 'gatsby';

import { TopsToolsList } from '../';
import { SubcategoryNode, mq } from '../../../shared';
import { Trophy } from '../../SVG';
import { SectionHeader } from '../SectionHeader';

interface LeaderboardProps {
  npmTops: SubcategoryNode[];
  githubTops: SubcategoryNode[];
}

export const Leaderboard = ({ npmTops, githubTops }: LeaderboardProps) => {
  return (
    <FlexWrapper style={{ borderWidth: '3px' }}>
      <ResponsiveTrophy />
      <LeaderboardWrapper style={{ width: '480px' }}>
        <SectionHeader title="Tools leaderboard" />
        <TopsToolsList.Wrapper horizontal>
          <TopsToolsList.Segment>{npmTops ? <TopsToolsList tops={npmTops} type="npm" /> : null}</TopsToolsList.Segment>
          <TopsToolsList.Segment>
            {githubTops ? <TopsToolsList tops={githubTops} type="github" /> : null}
          </TopsToolsList.Segment>
        </TopsToolsList.Wrapper>
        <Button as={Link} to="/leaderboard" primary>
          See all
        </Button>
      </LeaderboardWrapper>
      <ResponsiveTrophy />
    </FlexWrapper>
  );
};

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 70px;
  padding: 20px 0;
  border-style: solid;
  border-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(23, 124, 190, 0.5), rgba(0, 0, 0, 0)) 100% 0% 100% 0%;
`;

const LeaderboardWrapper = styled.div`
  min-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5%;
`;

const ResponsiveTrophy = styled(Trophy)`
  ${mq({
    display: ['none', 'none', 'initial', 'initial', 'initial'],
  })}
`;
