import React from 'react';
import { Grid } from 'semantic-ui-react';

import { Subcategory, CategoriesCodes } from '../../../shared';
import { CategoryItem } from '../..';
import { SectionHeader } from '../../shared';

interface SubcategoriesListProps {
  subcategories: string[];
}

export const SubcategoriesList = ({ subcategories }: SubcategoriesListProps) => {
  return (
    <>
      <SectionHeader
        title="This category is divided into more specific subcategories"
        subtitle="Choose the one that best suits your needs"
      />
      <Grid columns={2} centered relaxed>
        {subcategories.map(name => {
          const code = name.split('_')[0];
          return (
            <CategoryItem key={name} code={code as CategoriesCodes} url={name.replace('_', '/')}>
              <CategoryItem.Subcategory code={name as Subcategory} />
            </CategoryItem>
          );
        })}
      </Grid>
    </>
  );
};
