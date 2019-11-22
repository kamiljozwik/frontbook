import React, { SVGAttributes } from 'react';
import styled from '@emotion/styled';

export const NpmLogo = (props: SVGAttributes<Element>) => (
  <StyledSVG width="36px" viewBox="0 0 18 7" {...props}>
    <path
      fill="#CB3837"
      d="M0 0h18v6H9v1H5V6H0V0zm1 5h2V2h1v3h1V1H1v4zm5-4v5h2V5h2V1H6zm2 1h1v2H8V2zm3-1v4h2V2h1v3h1V2h1v3h1V1h-6z"
    />
    <path fill="#FFF" d="M1 5L3 5 3 2 4 2 4 5 5 5 5 1 1 1z" />
    <path fill="#FFF" d="M6 1v5h2V5h2V1H6zm3 3H8V2h1v2z" />
    <path fill="#FFF" d="M11 1L11 5 13 5 13 2 14 2 14 5 15 5 15 2 16 2 16 5 17 5 17 1z" />
  </StyledSVG>
);

const StyledSVG = styled.svg`
  position: relative;
  top: 4px;
`;
