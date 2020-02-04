import { Row } from 'react-table';

export const startWith = <D extends object>(rows: Array<Row<D>>, id: number, filterValue: any) => {
  return rows.filter(row => {
    const rowValue = row.values[id];
    console.log(row);
    return rowValue !== undefined
      ? String(rowValue)
          .toLowerCase()
          .startsWith(String(filterValue).toLowerCase())
      : true;
  });
};
