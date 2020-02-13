import React, { useCallback } from 'react';
import { UsePaginationInstanceProps, UseTableInstanceProps } from 'react-table';
import { Table, Pagination, Dropdown } from 'semantic-ui-react';
import styled from '@emotion/styled';
import { Assign } from 'utility-types';

type SuiTableFooterProps<D extends object> = Pick<
  Assign<UsePaginationInstanceProps<D>, UseTableInstanceProps<D>>,
  'headerGroups' | 'pageCount' | 'gotoPage' | 'setPageSize'
>;

const pageSizes = [
  { key: 10, value: 10, text: 'Show 10' },
  { key: 20, value: 20, text: 'Show 20' },
  { key: 50, value: 50, text: 'Show 50' },
  { key: 100, value: 100, text: 'Show 100' },
];

export const SuiTableFooter = <D extends object>({
  headerGroups,
  pageCount,
  gotoPage,
  setPageSize,
}: SuiTableFooterProps<D>) => {
  const onPageChange = useCallback((e, data) => gotoPage((data.activePage as number) - 1), [gotoPage]);
  const onPageSizeChange = useCallback((e, data) => setPageSize(data.value as number), [setPageSize]);
  return (
    <Table.Footer fullWidth data-testid="tableFooter">
      <Table.Row>
        <Table.HeaderCell colSpan={headerGroups.slice(-1)[0].headers.length}>
          <FooterRow>
            <Pagination defaultActivePage={1} totalPages={pageCount} onPageChange={onPageChange} />
            <Dropdown selection compact options={pageSizes} defaultValue={20} onChange={onPageSizeChange} />
          </FooterRow>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  );
};

const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
