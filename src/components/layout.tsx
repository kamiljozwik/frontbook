import React, { ReactNode } from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import { Header } from '.';
import TopBar from './TopBar';
import { colors } from '../shared';
import './layout.css';
import 'semantic-ui-css/semantic.min.css';
import './custom_styles.css';

interface LayoutProps {
  children: ReactNode;
  category: string;
}

export const Layout = ({ children, category = 'frontBook' }: LayoutProps) => {
  return (
    <>
      <TopBar />
      <Header category={category} />
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

const Wrapper = styled('div')`
  margin: 0 auto;
  width: 80vw;
  min-width: 1400px;
`;
