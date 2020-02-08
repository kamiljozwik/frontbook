import React from 'react';
import styled from '@emotion/styled';

import { CategoriesCodes } from '../../shared/types';
import { activeCategories } from '../../shared';
import { SectionHeader } from './SectionHeader';
import { CategoryItem } from '../';

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
          <CategoryItem key={category} code={category as CategoriesCodes}>
            <CategoryItem.Category
              code={category as CategoriesCodes}
              count={data[category] ? data[category].totalCount : 0}
            />
          </CategoryItem>
        ))}
      </CategoriesList>
    </>
  );
};

const CategoriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 200px;
`;
