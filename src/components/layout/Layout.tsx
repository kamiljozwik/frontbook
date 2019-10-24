import React, { ReactNode, useEffect } from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import { LandingHeader, CategoryHeader } from './';
import TopBar from './TopBar';
import { colors, CategoriesCodes } from '../../shared';
import { mq } from '../layout';
import './layout.css';
import 'semantic-ui-css/semantic.min.css';
import './custom_styles.css';

interface LayoutProps {
  children: ReactNode;
  category?: CategoriesCodes;
  subcategories?: string[];
  subcategory?: string;
  color?: string;
  count?: number;
}

export const Layout = ({ children, category, subcategories, subcategory, color = '#D1BF20', count = -1 }: LayoutProps) => {
  useEffect(() => {
    // TODO: make it better. Now it jumps...
    document.body.scrollTop = 0;
  }, [category]);
  return (
    <>
      <TopBar />
      {category ? <CategoryHeader category={category!} subcategory={subcategory} subcategories={subcategories} color={color}/> : <LandingHeader total={count} />}
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
