import React from 'react';
import { Grid } from 'semantic-ui-react';

import { Subcategory, CategoriesCodes } from '../../../shared';
import { CategoryItem } from '../..';
import { SectionHeader } from '../../shared';
import styled from '@emotion/styled';

interface SubcategoriesListProps {
  subcategories: string[];
  color?: string;
}

export const SubcategoriesList = ({ subcategories, color }: SubcategoriesListProps) => {
  return (
    <SubcategoriesListWrapper>
      <SectionHeader
        title="This category is divided into more specific subcategories"
        subtitle="Choose the one that best suits your needs"
        dividerColor={color}
      />
      <Grid relaxed>
        {subcategories.map(name => {
          const code = name.split('_')[0];
          return (
            <CategoryItem key={name} code={code as CategoriesCodes} url={name.replace('_', '/')}>
              <CategoryItem.Subcategory code={name as Subcategory} />
            </CategoryItem>
          );
        })}
      </Grid>
    </SubcategoriesListWrapper>
  );
};

const SubcategoriesListWrapper = styled.div`
  margin-bottom: 200px;
`;
