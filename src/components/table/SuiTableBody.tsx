import React from 'react';
import { UseTableInstanceProps, UsePaginationInstanceProps } from 'react-table';
import { Table } from 'semantic-ui-react';
import { Assign } from 'utility-types';

type SuiTableBodyProps<D extends object> = Pick<
  Assign<UsePaginationInstanceProps<D>, UseTableInstanceProps<D>>,
  'getTableBodyProps' | 'page' | 'prepareRow'
>;

export const SuiTableBody = <D extends object>({ getTableBodyProps, page, prepareRow }: SuiTableBodyProps<D>) => {
  return (
    <Table.Body data-testid="tableBody" {...getTableBodyProps()}>
      {page.map((row, i) => {
        prepareRow(row);
        return (
          <Table.Row {...row.getRowProps()}>
            {row.cells.map(cell => {
              return <Table.Cell {...cell.getCellProps()}>{cell.render('Cell')}</Table.Cell>;
            })}
          </Table.Row>
        );
      })}
    </Table.Body>
  );
};
