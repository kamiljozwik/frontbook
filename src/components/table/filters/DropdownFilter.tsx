import React, { useCallback } from 'react';
import { Dropdown } from 'semantic-ui-react';
import styled from '@emotion/styled';

import { ColumnFilterProps } from './DefaultColumnFilter';

// Dropdown UI for filtering
export const DropdownFilter = <D extends object>({
  column: { filterValue, setFilter, preFilteredRows, id },
}: ColumnFilterProps<D>) => {
  type DropdownOption = { key: string; text: string; value: string };

  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach(row => {
      options.add(row.values[id]);
    });
    const values = [...options.values()];
    const items = values.map(v => ({ key: v, text: v, value: v }));
    return [{ key: 'all', text: 'All', value: 'all' }, ...items];
  }, [id, preFilteredRows]) as DropdownOption[];

  const changeHandler = useCallback(
    (e, data) => {
      data.value === 'all' ? setFilter(undefined) : setFilter(data.value);
    },
    [setFilter]
  );
  return (
    <MinWidthDropdown clearable selection value={filterValue || 'all'} options={options} onChange={changeHandler} />
  );
};

const MinWidthDropdown = styled(Dropdown)`
  &&&&& {
    min-width: 12em;
  }
`;
