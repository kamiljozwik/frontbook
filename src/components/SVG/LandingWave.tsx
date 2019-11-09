import React from 'react';
import styled from '@emotion/styled';

export const LandingWave = (props: any) => (
  <StyledSVG viewBox="0 0 1920 754" fill="none" {...props}>
    <path
      d="M0 754s117.38-.5 224.44-60S520 586 680 559c163.377-16 330.21-34.593 487-66.5 142.5-29 165.5-27.5 318.5-80.5s344.91-124 434.5-218V0H0v754z"
      fill="#09F"
    />
    <path
      d="M0 754s117.38-.5 224.44-60S520 586 680 559c163.377-16 330.21-34.593 487-66.5 142.5-29 165.5-27.5 318.5-80.5s344.91-124 434.5-218V0H0v754z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1={0.0000688809}
        y1={158.499}
        x2={1920}
        y2={370.499}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0} />
        <stop offset={1} stopColor="#fff" stopOpacity={0.59} />
      </linearGradient>
    </defs>
  </StyledSVG>
);

const StyledSVG = styled.svg`
  position: absolute;
  top: -5px;
  left: 0;
  z-index: -1;
  min-height: 80vh;
`;
