import React from 'react';
import { render } from '@testing-library/react';

// https://github.com/testing-library/jest-dom/issues/123 - waiting for DefinitelyTyped PR
import '@testing-library/jest-dom/extend-expect';
import { SubcategoriesList } from '../categoryPage/subcategoriesList';

describe('SubcategoriesList component ', () => {
  it('renders subcategories cards for CSS category', () => {
    const data = {
      subcategories: {
        distinct: ['css_animations', 'css_cheatsheets', 'css_frameworks', 'css_processors', 'css_utils'],
      },
    };

    const { container } = render(<SubcategoriesList subcategories={data.subcategories.distinct} />);

    expect(container).toMatchSnapshot();
  });
});
