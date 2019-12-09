import React from 'react';

import { LandingHeader, CategoryHeader, LeaderboardHeader } from './';
import { CategoriesCodes, colors } from '../../../shared';

type PageTypes = 'landing' | 'category' | 'leaderboard';

interface HeaderProps {
  pageType: PageTypes;
  category?: CategoriesCodes;
  subcategory?: string;
  subcategories?: string[];
  color?: string;
}

export const PageHeader = ({ pageType, category, subcategory, subcategories, color }: HeaderProps) => {
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
