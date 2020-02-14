import React from 'react';
import { HeaderGroup, UseSortByColumnProps } from 'react-table';
import { Table } from 'semantic-ui-react';

import { TableStateWithHooks } from './SuiTable';

interface SuiTableHeaderProps<D extends object> {
  headerGroups: Array<HeaderGroup<D>>;
  state: TableStateWithHooks<D>;
}

export const SuiTableHeader = <D extends object>({ headerGroups, state }: SuiTableHeaderProps<D>) => {
  const sortColumn = (column: UseSortByColumnProps<D>) => column.getSortByToggleProps();
  return (
    <Table.Header data-testid="tableHeader">
      {headerGroups.map((headerGroup, index) => (
        <Table.Row {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <Table.HeaderCell
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              {...column.getHeaderProps(sortColumn(column as any))}
              style={{ width: column.width, cursor: index === headerGroups.length - 1 ? 'pointer' : 'auto' }}
              sorted={
                state.sortBy[0] && state.sortBy[0].id === column.id
                  ? state.sortBy[0].desc
                    ? 'descending'
                    : 'ascending'
                  : undefined
              }
            >
              {column.render('Header')}
            </Table.HeaderCell>
          ))}
        </Table.Row>
      ))}
    </Table.Header>
  );
};
