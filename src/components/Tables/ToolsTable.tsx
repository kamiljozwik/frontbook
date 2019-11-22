import React from 'react';
import ReactTable from 'react-table';

import 'react-table/react-table.css';
import { colors, SubcategoryNode, LinkEntry } from '../../shared';
import { columns } from './';
import { mq } from '../layout';
import styled from '@emotion/styled';
import { Links } from '../';

interface ToolsTableProps {
  items: SubcategoryNode[];
  links: LinkEntry[];
}

export const ToolsTable = ({ items, links }: ToolsTableProps) => {
  // console.log(items)
  return (
    <>
      <StyledTable
        data={items}
        resizable={false}
        showPagination={false}
        defaultPageSize={items.length}
        defaultSorted={[{ id: 'github-stars', desc: true }]}
        filterable
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      {links.length > 0 && <Links links={links} />}
    </>
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
    & .rt-tr-group:hover {
      background: whitesmoke;
    }
  }
`;

/**
 * Table
 */
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
const TableHeadFilterCell = () => {
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
