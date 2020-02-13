import React from 'react';
import { Label, Input } from 'semantic-ui-react';
import { ColumnFilterProps } from '../../../../table';

export const FilterInput = <D extends object>({ column: { filterValue, setFilter } }: ColumnFilterProps<D>) => {
  const tail = true;
  const tailLabel = 'kb';
  const label = 'min';
  return (
    <Input
      size="mini"
      labelPosition={tail ? 'right' : 'left'}
      type="number"
      placeholder="value"
      aria-label="filter records"
      onChange={(e, data) => setFilter(parseInt(data.value ? data.value : '0') * 1024)}
    >
      <Label basic>{label}</Label>
      <input aria-label="filter records" />
      {tail && <Label basic>{tailLabel}</Label>}
    </Input>
  );
};
