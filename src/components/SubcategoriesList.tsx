import React from 'react';

import { SubcategoryCard } from '../components';
import { Subcategory } from '../shared';

interface SubcategoriesListProps {
  subcategories: string[];
}

export const SubcategoriesList = ({ subcategories }: SubcategoriesListProps) => (
  <>
    {
      subcategories.map(name => <SubcategoryCard key={name} name={name as Subcategory} />)
    }
  </>
);
