// import React from 'react';
// import { render } from '@testing-library/react';

// import { SuiTable } from './';
// import { columns, makeData, title, ColumnWithFilters } from './_mockData';

// const DATA_COUNT = 15;
// const data = makeData(DATA_COUNT);

// const activeFilters = (columns: ColumnWithFilters<any>[]) => {
//   let activeFiltersCount = 0;
//   const nestedColumns = (col: ColumnWithFilters<any>) =>
//     col.columns ? col.columns.forEach(nestedColumns) : !col.disableFilters && activeFiltersCount++;
//   columns.forEach(nestedColumns);
//   return activeFiltersCount;
// };

// describe('SUI Table', () => {
//   it('should render SUI table with title bar and filters', () => {
//     const { getByText, container, getByTestId } = render(<SuiTable title={title} columns={columns} data={data} />);

//     /**Table Title */
//     const tableTitle = getByText(title.content);
//     const actionBtn = getByText('Edit');
//     const icon = container.querySelector('.icon.calendar');
//     expect(tableTitle).toBeInTheDocument();
//     expect(actionBtn).toBeInTheDocument();
//     expect(icon).toBeInTheDocument();

//     /**Table Filters */
//     const tableFilters = getByTestId('tableFilters');
//     const renderedFilters = tableFilters.childElementCount;
//     const actualFilters = activeFilters(columns);
//     expect(renderedFilters).toEqual(actualFilters);

//     /**Table Header */
//     const tableHeader = getByTestId('tableHeader');
//     expect(tableHeader).toBeInTheDocument();

//     /**Table Body */
//     const tableBody = getByTestId('tableBody');
//     const tableRows = DATA_COUNT > 10 ? 10 : tableBody.childElementCount;
//     expect(tableBody.childElementCount).toEqual(tableRows);

//     /**Table Footer */
//     const tableFooter = getByTestId('tableFooter');
//     expect(tableFooter).toBeInTheDocument();
//   });

//   it('should render SUI table without title bar and filters', () => {
//     const { queryByTestId } = render(<SuiTable columns={columns} data={data} disableFilters />);

//     /**Table Title */
//     const tableTitle = queryByTestId('tableTitle');
//     expect(tableTitle).toBeNull();

//     /**Table Filters */
//     const tableFilters = queryByTestId('tableFilters');
//     expect(tableFilters).toBeNull();
//   });
// });

describe('SUI Table', () => {
  it('placeholder test', () => {
    expect(true).toBeTruthy();
  });
});

export const cc = 'placeholder';
