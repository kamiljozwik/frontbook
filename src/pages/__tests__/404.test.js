import React from 'react';
import { render } from '@testing-library/react';
import { Layout } from '../../components/layout/Layout';

import NotFoundPage from '../404';

jest.mock('../../components/layout/Layout');
Layout.mockImplementationOnce(({ children }) => <div>{children}</div>);

describe('404 Page', () => {
  it('contains NOT FOUND text', () => {
    const { getByText } = render(<NotFoundPage />);
    const el = getByText('Page not found...');
    const HomeBtn = getByText('HOME');

    expect(el).toBeInTheDocument();
    expect(HomeBtn).toBeInTheDocument();
  });
});
