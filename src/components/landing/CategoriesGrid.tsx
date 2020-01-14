import React from 'react';
import styled from '@emotion/styled';

import { CategoryItem } from '.';
import { CategoriesCodes } from '../../shared/types';
import { activeCategories } from '../../shared';
import { SectionHeader } from './SectionHeader';

interface CategoriesGridProps {
  data: {
    [index: string]: {
      totalCount: number;
    };
  };
}

export const CategoriesGrid = ({ data }: CategoriesGridProps) => {
  return (
    <>
      <SectionHeader
        title="Explore best tools and resources"
        subtitle="Browse all categories and find the best solutions for your project"
      />
      <CategoriesList>
        {activeCategories.map(category => (
          <CategoryItem
            key={category}
            code={category as CategoriesCodes}
            count={data[category] ? data[category].totalCount : 0}
          />
        ))}
      </CategoriesList>
    </>
  );
};

const CategoriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
