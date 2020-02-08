import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../colors';

// Inspired by https://codepen.io/justintan/pen/bRjRdo
export const BasicLoader = () => {
  return (
    <BasicLoaderWrapper>
      <PartOne />
      <PartTwo />
      <LoadText>Loading</LoadText>
    </BasicLoaderWrapper>
  );
};

const BasicLoaderWrapper = styled.div`
  position: relative;
`;

const PartOne = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 50px 0 0;
  border-color: ${colors.logoLight} transparent transparent transparent;
  margin: 0 auto;
  animation: shk1 1s ease-in-out infinite normal;
  @keyframes shk1 {
    0% {
      transform: rotate(-360deg);
    }

    100% {
    }
  }
`;

const PartTwo = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 50px 50px;
  border-color: transparent transparent ${colors.logoDark} transparent;
  margin: -50px auto 0;
  animation: shk2 1s ease-in-out infinite alternate;
  @keyframes shk2 {
    0% {
      transform: rotate(360deg);
    }
    100% {
    }
  }
`;

const LoadText = styled.h4`
  margin: 30px auto;
  text-align: center;
  font-weight: 100;
  letter-spacing: 10px;
`;
