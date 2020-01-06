import React, { ReactNode, useEffect } from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import TopBar from './TopBar';
import { PageHeader } from './headers';
import { colors, CategoriesCodes, mq } from '../../shared';
import './layout.css';
import 'semantic-ui-css/semantic.min.css';
import './custom_styles.css';

export type PageTypes = '404' | 'landing' | 'category' | 'leaderboard';
interface LayoutProps {
  children: ReactNode;
  category?: CategoriesCodes;
  subcategories?: string[];
  subcategory?: string;
  color?: string;
  pageType: PageTypes;
}

export const Layout = ({
  children,
  category,
  subcategories,
  subcategory,
  color = '#D1BF20',
  pageType,
}: LayoutProps) => {
  useEffect(() => {
    document.body.scrollTop = 0;
  }, [category]);
  return (
    <>
      <TopBar />
      <PageHeader
        pageType={pageType}
        category={category}
        subcategory={subcategory}
        subcategories={subcategories}
        color={color}
      />
      <PageContentWrapper>
        <Global
          styles={css`
            * {
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
  ${mq({
    width: ['100%', '90%', '80%', '80%', '80%'],
  })}
`;
