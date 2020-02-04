import React from 'react';
import { render } from '@testing-library/react';

// https://github.com/testing-library/jest-dom/issues/123 - waiting for DefinitelyTyped PR
import '@testing-library/jest-dom/extend-expect';
import { CategoriesGrid } from '../landing/CategoriesGrid';

describe('CategoriesGrid component ', () => {
  it('renders categories card on landing page', () => {
    const data = {
      js: {
        totalCount: 1,
      },
      jam: {
        totalCount: 2,
      },
      css: {
        totalCount: 3,
      },
      seo: {
        totalCount: 4,
      },
      frontops: {
        totalCount: 5,
      },
      monitor: {
        totalCount: 6,
      },
      ux: {
        totalCount: 7,
      },
      utils: {
        totalCount: 8,
      },
    };

    const { container } = render(<CategoriesGrid data={data} />);

    expect(container).toMatchSnapshot();
  });
});
