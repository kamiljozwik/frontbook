import React, { ReactNode, useEffect } from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import { LandingHeader, CategoryHeader, LeaderboardHeader } from './';
import TopBar from './TopBar';
import { colors, CategoriesCodes } from '../../shared';
import { mq } from '../layout';
import './layout.css';
import 'semantic-ui-css/semantic.min.css';
import './custom_styles.css';

type PageTypes = 'landing' | 'category' | 'leaderboard';
interface LayoutProps {
  children: ReactNode;
  category?: CategoriesCodes;
  subcategories?: string[];
  subcategory?: string;
  color?: string;
  pageType: PageTypes;
}

const headerFactory = (
  pageType: PageTypes,
  category?: CategoriesCodes,
  subcategory?: string,
  subcategories?: string[],
  color?: string
) => {
  switch (pageType) {
    case 'landing':
      return <LandingHeader />;
    case 'category':
      return (
        <CategoryHeader
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          category={category!}
          subcategory={subcategory}
          subcategories={subcategories}
          color={color || colors.default}
        />
      );
    case 'leaderboard':
      return <LeaderboardHeader color={color || colors.default} />;
    default:
      return <LandingHeader />;
  }
};

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
      {headerFactory(pageType, category, subcategory, subcategories, color)}
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
