import React, { ReactNode } from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import Header from './header';
import { colors } from '../shared';
import './layout.css';
import 'semantic-ui-css/semantic.min.css';

const Wrapper = styled('div')`
  margin: 0 auto;
  width: 80vw;
  min-width: 1400px;
`;

interface LayoutProps {
  children: ReactNode;
  category: string;
}

export const Layout = ({ children, category = 'Frontstate' }: LayoutProps) => {
  return (
    <>
      <Header siteTitle={category} />
      <Wrapper>
        <Global
          styles={css`
            * {
              font-family: inherit;
              color: ${colors.black};
            }
          `}
        />
        <main>{children}</main>
      </Wrapper>
    </>
  );
};
