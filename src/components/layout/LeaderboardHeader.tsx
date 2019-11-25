import React from 'react';
import styled from '@emotion/styled';

import { CategoryWave, Trophy } from '../SVG';
import { mq } from '../layout';

interface CategoryHeaderProps {
  color: string;
}

export const LeaderboardHeader = ({ color }: CategoryHeaderProps) => {
  return (
    <>
      <LeaderboardHeaderWrapper>
        <CategoryWave color={color} style={{ minHeight: '40vh' }} />
        <HeaderData>
          <HeaderTitle>Front-end tools leaderboard</HeaderTitle>
        </HeaderData>
        <HeaderGraphics>
          <Trophy />
        </HeaderGraphics>
      </LeaderboardHeaderWrapper>
    </>
  );
};

const LeaderboardHeaderWrapper = styled.div`
  height: calc(40vh - 100px);
  width: 80vw;
  margin: 0 auto;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
`;

const HeaderData = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${mq({
    width: ['100%', '100%', '80%', '80%', '80%'],
  })}
`;

const HeaderGraphics = styled.div`
  opacity: 0.8;
  height: 80%;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  ${mq({
    display: ['none', 'none', 'flex', 'flex', 'flex'],
    flexDirection: ['column', 'column', 'column', 'row', 'row'],
  })}
`;

const HeaderTitle = styled.div`
  font-weight: 700;
  color: white;
  width: 100%;
  line-height: 100%;
  margin-bottom: 10px;
  ${mq({
    fontSize: ['7vw', '7vw', '7vw', '5vw', '3.2vw'],
  })}
`;
