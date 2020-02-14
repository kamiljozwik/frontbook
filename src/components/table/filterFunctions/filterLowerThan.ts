import { Row } from 'react-table';

export function filterLowerThan<D extends object>(rows: Array<Row<D>>, id: string[], filterValue: number) {
  return rows.filter(row => {
    const rowValue = row.values[id[0]];
    return filterValue === 0 ? true : rowValue < filterValue;
  });
}

filterLowerThan.autoRemove = (val: number) => typeof val !== 'number';
