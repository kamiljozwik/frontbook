import { Row } from 'react-table';

export function filterForLicenses<D extends object>(rows: Array<Row<D>>, id: string[], filterValue: string) {
  console.log(filterValue);
  return rows.filter(row => {
    const rowValue = row.values[id[0]];
    if (filterValue === 'mit') {
      return rowValue === 'MIT';
    }
    if (filterValue === 'mit2') {
      return rowValue === 'MIT' || rowValue === 'NOASSERTION' || rowValue === undefined;
    }
    return filterValue === 'all' || filterValue === '';
  });
}
