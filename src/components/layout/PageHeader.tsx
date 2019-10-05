import React from 'react';
import styled from '@emotion/styled';
import { Header } from 'semantic-ui-react';

import { LandingWave } from '../SVG';

interface LayoutProps {
  total: number;
}

export const PageHeader = ({ total }: LayoutProps) => {
  return (
    <>
      <HeaderWrapper>
        <LandingWave />
        <HeaderTite>
          All front-end tools and resources in one place.
        </HeaderTite>
        <HeaderSubTite>
          Compare real numbers and choose the right tools for your next project.
        </HeaderSubTite>
        <PositionHelper />
      </HeaderWrapper>
      <Header textAlign="center" size="large" style={{marginBottom: '100px'}}>
        {total} best front-end tools and resources to choose from!
      </Header>
    </>
  );
};

const HeaderWrapper = styled.div`
  height: 75vh;
  width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeaderTite = styled.div`
  font-weight: 700;
  color: white;
  font-size: 3.2vw;
  width: 50%;
  line-height: 100%;
  margin-bottom: 20px;
`;
const HeaderSubTite = styled.div`
  font-weight: 300;
  color: white;
  font-size: 1.4vw;
  width: 50%;
  line-height: 120%;
`;

const PositionHelper = styled.div`
  height: 20vh;
`;
