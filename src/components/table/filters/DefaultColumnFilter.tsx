import React, { useCallback } from 'react';
import { UseFiltersColumnProps } from 'react-table';
import { Input } from 'semantic-ui-react';
import { Assign } from 'utility-types';

type ID = {
  id: string | number;
};

export interface ColumnFilterProps<D extends object> {
  column: Assign<UseFiltersColumnProps<D>, ID>;
}

// Default UI (input) for filtering
export const DefaultColumnFilter = <D extends object>({
  column: { filterValue, preFilteredRows, setFilter },
}: ColumnFilterProps<D>) => {
  const count = preFilteredRows.length;
  const changeHandler = useCallback(
    (e, data) => {
      setFilter(data.value || undefined);
    },
    [setFilter]
  );
  return (
    <Input size="small" value={filterValue || ''} onChange={changeHandler} placeholder={`Search ${count} records...`} />
  );
};
