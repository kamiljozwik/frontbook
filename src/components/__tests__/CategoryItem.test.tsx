import React from 'react';
import { render } from '@testing-library/react';

// https://github.com/testing-library/jest-dom/issues/123 - waiting for DefinitelyTyped PR
import '@testing-library/jest-dom/extend-expect';
import { CategoryItem } from '../shared/CategoryItem';

describe('CategoryItem component ', () => {
  it('renders card for js category', () => {
    const category = 'js';
    const data = {
      js: {
        totalCount: 10,
      },
    };

    const { container } = render(
      <CategoryItem code={category}>
        <CategoryItem.Category code={category} count={data[category] ? data[category].totalCount : 0} />
      </CategoryItem>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders card for js animation subcategory', () => {
    const code = 'js';
    const name = 'js_animations';

    const { container } = render(
      <CategoryItem code={code} url={name.replace('_', '/')}>
        <CategoryItem.Subcategory code={name} />
      </CategoryItem>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
