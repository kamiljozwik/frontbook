import React, { ReactNode } from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import { LandingWave } from '../SVG';

interface LayoutProps {
  category: string;
}

export const PageHeader = ({ category = 'frontBook' }: LayoutProps) => {
  return (
    <>
      <div>
        All frontEnd tools and resources in one place.
      </div>
      <div>
        Compare real numbers and choose the right tools for your next project.
      </div>
      <LandingWave />
    </>
  );
};

const HeaderTite = styled.div`
  width: 50vw;
`;
