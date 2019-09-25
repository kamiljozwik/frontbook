import React from 'react';
import ReactTable, { RowInfo, Column, FinalState, Instance, ComponentDecoratorProps } from 'react-table';

import 'react-table/react-table.css';
import { colors, SubcategoryNode } from '../../shared';
import { columns } from './';

interface ToolsTableProps {
  items: SubcategoryNode[];
}

export const ToolsTable = ({ items }: ToolsTableProps) => {
  return (
    <ReactTable
      data={items}
      resizable={false}
      showPagination={false}
      defaultPageSize={items.length}
      defaultSorted={[{id: 'github-stars', desc: true}]}
      filterable
      // tslint:disable-next-line: jsx-no-lambda
      resolveData={data => data.map((node: any) => node.node)}
      columns={columns}
      getTheadProps={TableHead}
      getTheadTrProps={TableHeadRow}
      getTheadThProps={TableHeadCell}
      getTheadFilterThProps={TableHeadFilterCell}
      getTrProps={TableBodyRow}
      getTdProps={TableBodyCell}
    />
  );
};

/**
 * Header
 */
const TableHead = () => {
  return {
    style: {
      background: colors.grey,
      boxShadow: 'none',
    },
  };
};

const TableHeadRow = () => {
  return {
    style: {
      border: 'none',
      height: '40px',
    },
  };
};

const TableHeadCell = () => {
  return {
    style: {
      border: 'none',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
  };
};

/**
 * Header Filters
 */
const TableHeadFilterCell = () => {
  return {
    style: {
      height: '50px',
      padding: '0',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      overflow: 'visible',
    },
  };
};

/**
 * Body
 */
const TableBodyRow = () => {
  return {
    style: {
      height: '60px',
    },
  };
};

const TableBodyCell = (finalState: FinalState, rowInfo?: RowInfo, column?: Column, instance?: Instance) => {
  return {
    style: {
      border: 'none',
      fontSize: column!.id  === 'name' ? '15px' : 'auto',
      fontWeight: column!.id  === 'name' ? '600' : 'auto',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      overflowWrap: 'break-word',
      whiteSpace: 'pre-wrap',
    },
  };
};
