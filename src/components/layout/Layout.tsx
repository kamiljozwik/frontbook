import React, { ReactNode } from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import { PageHeader } from './';
import TopBar from './TopBar';
import { colors } from '../../shared';
import './layout.css';
import 'semantic-ui-css/semantic.min.css';
import './custom_styles.css';

interface LayoutProps {
  children: ReactNode;
  category?: string;
  count?: number;
}

export const Layout = ({ children, category = 'no-category', count = -1 }: LayoutProps) => {
  return (
    <>
      <TopBar />
      <PageHeader total={count} />
      <PageContentWrapper>
        <Global
          styles={css`
            * {
              font-family: 'Roboto', sans-serif;
              color: ${colors.black};
            }
          `}
        />
        <main>{children}</main>
      </PageContentWrapper>
    </>
  );
};

const PageContentWrapper = styled('div')`
  margin: 0 auto;
  width: 80vw;
  min-width: 1400px;
`;
