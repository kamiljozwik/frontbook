import React from 'react';
import { UseFiltersColumnOptions, UseTableColumnOptions } from 'react-table';
import { Label, Icon, Flag, Button } from 'semantic-ui-react';
import { Assign } from 'utility-types';

import { DropdownFilter, SliderColumnFilter, filterGreaterThan, NumberRangeColumnFilter, StatusFilter } from '../.';

type Data = {
  firstName: string;
  lastName: string;
  status: string;
  country: string;
  age: number;
  visits: number;
  progress: number;
};

const clickHandler = (data: any) => {
  console.log('Available data:', data);
  alert('Check DevTools console for more info!');
};

export type ColumnWithFilters<D extends object> = Assign<UseTableColumnOptions<D>, UseFiltersColumnOptions<D>>;

export const columns: Array<ColumnWithFilters<Data>> = [
  {
    Header: 'Name',
    columns: [
      {
        Header: 'First Name',
        accessor: 'firstName',
        width: '25%',
        filter: 'text',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
        width: '25%',
      },
    ],
  },
  {
    Header: 'Info',
    columns: [
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ cell: { value } }) => (
          <>
            <Label color={value === 'active' ? 'green' : 'red'}>{value}</Label>
          </>
        ),
        Filter: StatusFilter,
        filter: 'exactText',
      },
      {
        Header: 'Country',
        accessor: 'country',
        Cell: ({ cell: { value } }) => (
          <>
            <Flag name={value.toLowerCase()} />
            {value}
          </>
        ),
        Filter: DropdownFilter,
        filter: 'includes',
      },
      {
        Header: 'Age',
        accessor: 'age',
        width: '60px',
        Filter: SliderColumnFilter,
        filter: filterGreaterThan,
      } as ColumnWithFilters<Data>,
      {
        Header: 'Visits',
        accessor: 'visits',
        disableFilters: true,
      },
      {
        Header: 'Profile Progress',
        accessor: 'progress',
        width: '10%',
        Cell: ({ cell: { value } }) => (
          <Label color={value > 50 ? 'green' : 'red'} basic>
            <Icon name={value > 50 ? 'thumbs up' : 'thumbs down'} />
            {value}
          </Label>
        ),
        Filter: NumberRangeColumnFilter,
        filter: 'between',
      },
      {
        Header: 'Actions',
        id: 'actions',
        width: '10%',
        disableFilters: true,
        // accessor: () => null,
        accessor: data => (
          <Button.Group size="mini">
            <Button basic onClick={() => clickHandler(data)}>
              Details
            </Button>
            <Button color="red" onClick={() => alert(`Delete user ${data.firstName} ${data.lastName}?`)}>
              Delete
            </Button>
          </Button.Group>
        ),
        /* 
          You can use 'Cell' to get more data than
          you get via 'accessor'.
          In this case set 'accessor' to '() => null'
          and render buttons like below:
        */
        // Cell: data => (
        //   <Button.Group size="mini">
        //     <Button basic onClick={() => clickHandler(data)}>
        //       Details
        //     </Button>
        //     <Button
        //       color="red"
        //       onClick={() => alert(`Delete user ${data.row.values.firstName} ${data.row.values.lastName}?`)}
        //     >
        //       Delete
        //     </Button>
        //   </Button.Group>
        // ),
      },
    ],
  },
];
