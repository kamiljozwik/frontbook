import React, { ReactNode } from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import Header from './header';
import './layout.css';
import 'semantic-ui-css/semantic.min.css';

const Wrapper = styled('div')`
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0px;
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
              font-family: monospace;
              color: #3c3ccc;
            }
          `}
        />
        <main>{children}</main>
      </Wrapper>
    </>
  );
};
