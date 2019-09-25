import React from 'react';

import { SubcategoryCard } from '../components';
import { Subcategory } from '../shared';

export const SubcategoriesList = ({ subcategories }: {subcategories: string[]}) => (
  <>
    {
      subcategories.map(name => <SubcategoryCard key={name} name={name as Subcategory} />)
    }
  </>
);
