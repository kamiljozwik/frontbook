import React, { useCallback } from 'react';
import { Dropdown } from 'semantic-ui-react';
import styled from '@emotion/styled';

import { ColumnFilterProps } from './DefaultColumnFilter';

type DropdownOption = { key: string; text: string; value: string };

export const LicenseFilter = <D extends object>({ column: { filterValue, setFilter } }: ColumnFilterProps<D>) => {
  const options: DropdownOption[] = [
    {
      key: 'all',
      text: 'All',
      value: 'all',
    },
    {
      key: 'mit',
      text: 'MIT only',
      value: 'mit',
    },
    {
      key: 'mit2',
      text: 'MIT + unknown',
      value: 'mit2',
    },
  ];

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
