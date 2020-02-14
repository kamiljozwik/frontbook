import React from 'react';
import {
  useTable,
  useFilters,
  useSortBy,
  usePagination,
  UseTableOptions,
  TableInstance,
  UsePaginationInstanceProps,
  UseSortByState,
  TableState,
  UseFiltersOptions,
} from 'react-table';
import { Table } from 'semantic-ui-react';
import { Assign } from 'utility-types';

import { SuiTableHeader, SuiTableBody, SuiTableFooter, DefaultColumnFilter, startWith } from './';
import { SuiTableTitle, TableTitle } from './SuiTableTitle';
import { SuiTableFilters } from './SuiTableFilters';
import styled from '@emotion/styled';
import { mq } from '../../shared';

export type TableStateWithHooks<D extends object> = Assign<TableState<D>, UseSortByState<D>>;
export interface TableInstanceWithHooks<D extends object> extends TableInstance<D>, UsePaginationInstanceProps<D> {}
export interface TableOptionsWithHooks<D extends object> extends UseTableOptions<D>, UseFiltersOptions<D> {}

interface SuiTableProps<D extends object> extends UseTableOptions<D>, UseFiltersOptions<D> {
  title?: TableTitle;
  pagination?: boolean;
}

export const SuiTable = <D extends object>({
  title,
  columns,
  data,
  disableFilters = false,
  pagination = false,
}: SuiTableProps<D>) => {
  const defaultColumn = React.useMemo(
    () => ({
      // Default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const filterTypes = React.useMemo(
    () => ({
      // override the default text filter to use "startWith"
      text: startWith,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageCount,
    gotoPage,
    setPageSize,
    state,
  } = useTable(
    {
      columns,
      data,
      filterTypes,
      defaultColumn,
      disableFilters,
      initialState: { pageSize: pagination ? 20 : 999 },
    } as TableOptionsWithHooks<D>,
    useFilters,
    useSortBy,
    usePagination
  ) as TableInstanceWithHooks<D>;

  return (
    <TableScroll>
      <FixedWidth>
        {title && <SuiTableTitle title={title} />}
        {!disableFilters && <SuiTableFilters headerGroup={headerGroups[headerGroups.length - 1]} />}
        <Table attached="bottom" sortable unstackable {...getTableProps()}>
          <SuiTableHeader headerGroups={headerGroups} state={state as TableStateWithHooks<D>} />
          <SuiTableBody getTableBodyProps={getTableBodyProps} page={page} prepareRow={prepareRow} />
          {pagination && (
            <SuiTableFooter
              headerGroups={headerGroups}
              pageCount={pageCount}
              gotoPage={gotoPage}
              setPageSize={setPageSize}
            />
          )}
        </Table>
      </FixedWidth>
    </TableScroll>
  );
};

const TableScroll = styled.div`
  ${mq({
    margin: ['0', '0', '0 -5%', '0 -5%', '0 -5%'],
  })}
  overflow-x: scroll;
`;

const FixedWidth = styled.div`
  min-width: 1500px;
  padding: 2px;
  margin-bottom: 50px;
`;
