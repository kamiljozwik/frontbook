import { Row } from 'react-table';

export function filterGreaterThan<D extends object>(rows: Array<Row<D>>, id: any, filterValue: number) {
  return rows.filter(row => {
    const rowValue = row.values[id];
    return rowValue >= filterValue;
  });
}

filterGreaterThan.autoRemove = (val: number) => typeof val !== 'number';
