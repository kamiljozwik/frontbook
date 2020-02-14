import React from 'react';
import { Label, Input } from 'semantic-ui-react';
import { ColumnFilterProps } from '.';

interface FilterInputProps<D extends object> extends ColumnFilterProps<D> {
  label?: string;
  tailLabel?: string;
  multi?: number;
}

export const FilterInput = <D extends object>({
  column: { setFilter },
  label = 'min:',
  tailLabel = '',
  multi = 1,
}: FilterInputProps<D>) => {
  return (
    <Input
      size="mini"
      labelPosition={tailLabel ? 'right' : 'left'}
      type="number"
      placeholder="value"
      aria-label="filter records"
      onChange={(e, data) => setFilter(parseInt(data.value ? data.value : '0') * multi)}
    >
      <Label basic>{label}</Label>
      <input aria-label="filter records" style={{ width: '80px' }} />
      {tailLabel && <Label basic>{tailLabel}</Label>}
    </Input>
  );
};
