import React from 'react';
import styled from '@emotion/styled';

import { LandingWave } from '../../SVG';
import { mq, landingData } from '../../../shared';

export const LandingHeader = () => {
  return (
    <>
      <LandingHeaderWrapper>
        <LandingWave />
        <LandingHeaderTitle>{landingData.header.title}</LandingHeaderTitle>
        <HeaderSubtitle>{landingData.header.subtitle}</HeaderSubtitle>
        <PositionHelper />
      </LandingHeaderWrapper>
    </>
  );
};

const LandingHeaderWrapper = styled.div`
  height: calc(80vh - 100px);
  width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LandingHeaderTitle = styled.div`
  font-weight: 700;
  color: white;
  line-height: 100%;
  margin-bottom: 20px;
  letter-spacing: 1px;
  ${mq({
    fontSize: ['30px', '30px', '30px', '30px', '42px'],
    width: ['100%', '100%', '100%', '100%', '50%'],
  })}
`;
const HeaderSubtitle = styled.div`
  font-weight: 300;
  color: white;
  line-height: 120%;
  ${mq({
    fontSize: ['20px', '20px', '20px', '20px', '20px'],
    width: ['100%', '100%', '100%', '100%', '50%'],
  })}
`;

const PositionHelper = styled.div`
  height: 20vh;
`;
