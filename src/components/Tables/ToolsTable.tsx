import React from 'react';
import ReactTable, { RowInfo, Column, FinalState, Instance } from 'react-table';
import { css } from '@emotion/core';

import 'react-table/react-table.css';
import { colors, SubcategoryNode } from '../../shared';
import { columns } from './';
import { mq } from '../layout';
import styled from '@emotion/styled';

interface ToolsTableProps {
  items: SubcategoryNode[];
}

const style = mq({
    marginBottom: '100px',
    overflowX: 'scroll',
    marginLeft: ['-8%', '-8%', '-8%', '-8%', '0'],
    marginRight: ['-8%', '-8%', '-8%', '-8%', '0'],
  });

export const ToolsTable = ({ items }: ToolsTableProps) => {
  // console.log(items)
  return (
    <StyledTable
      data={items}
      resizable={false}
      showPagination={false}
      defaultPageSize={items.length}
      defaultSorted={[{id: 'github-stars', desc: true}]}
      filterable
      // tslint:disable-next-line: jsx-no-lambda
      resolveData={data => data.map((node: any) => node.node)}
      columns={columns}
      getTableProps={Table}
      getTheadProps={TableHead}
      getTheadTrProps={TableHeadRow}
      getTheadThProps={TableHeadCell}
      getTheadFilterThProps={TableHeadFilterCell}
      getTrProps={TableBodyRow}
      getTdProps={TableBodyCell}
    />
  );
};

const StyledTable = styled(ReactTable)`
  &&& {
    margin-bottom: 100px;
    overflow-x: scroll;
    ${mq({
      marginLeft: ['5%', '0', '-8%', '-8%', '-8%'],
      marginRight: ['5%', '0', '-8%', '-8%', '-8%'],
    })}
  }
`;

const Table = () => {
  return {
    style: {
      minWidth: '1400px',
    },
  };
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
const TableHeadFilterCell = (finalState: any, rowInfo?: undefined, column?: Column, instance?: any) => {
  return {
    style: {
      height: '50px',
      padding: '0px',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      overflow: 'visible',
      // transform: column!.id === 'tool-name' || column!.id === 'tool-framework' ? 'translateX(-30px)' : 'auto',
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

const TableBodyCell = () => {
  return {
    style: {
      border: 'none',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      overflowWrap: 'break-word',
      whiteSpace: 'pre-wrap',
    },
  };
};
