import React from 'react';
import { Grid } from 'semantic-ui-react';

import { SubcategoryCard } from './';
import { Subcategory } from '../../shared';

interface SubcategoriesListProps {
  subcategories: string[];
}

export const SubcategoriesList = ({ subcategories }: SubcategoriesListProps) => (
  <Grid columns={2} centered relaxed>
    {
      subcategories.map(name => <SubcategoryCard key={name} name={name as Subcategory} />)
    }
  </Grid>
);
