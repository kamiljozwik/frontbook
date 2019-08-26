import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import { columns } from './';

interface ToolsTableProps {
  items: any;
}

export const ToolsTable = ({ items }: ToolsTableProps) => {
  const resolve = (items: any) => items.map((node: any) => node.node);
  console.log(resolve(items));
  return (
    <ReactTable
      data={items}
      // tslint:disable-next-line: jsx-no-lambda
      resolveData={data => data.map((node: any) => node.node)}
      columns={columns}
    />
  );
};
