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

// const data = [
//   {
//     name: 'Tanner Linsley',
//     age: 26,
//     friend: {
//       name: 'Jason Maurer',
//       age: 23,
//     },
//   },
// ];

// const columns = [{
//   Header: 'Name',
//   accessor: 'name' // String-based value accessors!
// }, {
//   Header: 'Age',
//   accessor: 'age',
//   Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
// }, {
//   id: 'friendName', // Required because our accessor is not a string
//   Header: 'Friend Name',
//   accessor: d => d.friend.name // Custom value accessors!
// }, {
//   Header: props => <span>Friend Age</span>, // Custom header components!
//   accessor: 'friend.age'
// }]