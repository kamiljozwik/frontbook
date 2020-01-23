import React from 'react';

import { LandingHeader, CategoryHeader, GeneralHeader } from './';
import { CategoriesCodes, colors } from '../../../shared';
import { PageTypes } from '../';

interface HeaderProps {
  pageType: PageTypes;
  category?: CategoriesCodes;
  subcategory?: string;
  subcategories?: string[];
  title?: string;
  color?: string;
}

export const PageHeader = ({ pageType, category, subcategory, subcategories, title, color }: HeaderProps) => {
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
    case 'page':
      return <GeneralHeader title={title} />;
    default:
      return <GeneralHeader />;
  }
};
