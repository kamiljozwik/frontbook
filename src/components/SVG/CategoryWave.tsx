import React, { SVGAttributes } from 'react';
import styled from '@emotion/styled';

export const CategoryWave = (props: SVGAttributes<Element>) => (
  <StyledCategorySVG viewBox="0 0 1920 316" preserveAspectRatio="xMinYMin slice" fill="none" {...props}>
    <path d="M0 282.5S253.56 316 398 316c356.584 0 720.5-56 989-56s533 42 533-49.5V0H0v282.5z" fill={props.color} />
    <path
      d="M0 282.5S253.56 316 398 316c356.584 0 720.5-56 989-56s533 42 533-49.5V0H0v282.5z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1={0.0000660625}
        y1={73.574}
        x2={1839.34}
        y2={511.094}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0} />
        <stop offset={1} stopColor="#fff" stopOpacity={0.59} />
      </linearGradient>
    </defs>
  </StyledCategorySVG>
);

const StyledCategorySVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  min-height: 50vh;
`;
