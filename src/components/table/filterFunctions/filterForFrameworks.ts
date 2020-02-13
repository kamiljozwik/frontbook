import { Row } from 'react-table';

export function filterForFrameworks<D extends object>(rows: Array<Row<D>>, id: any, filterValue: string) {
  return rows.filter(row => {
    const name = row.values.name.toLowerCase();
    const slogan = row.values['slogan.slogan'].toLowerCase();
    if (filterValue === 'vanilla') {
      const isVanilla =
        name.includes('react') || slogan.includes('react') || name.includes('vue') || slogan.includes('vue');
      return !isVanilla;
    }
    return name.includes(filterValue) || slogan.includes(filterValue);
  });
}

filterForFrameworks.autoRemove = (val: string) => typeof val !== 'string';
