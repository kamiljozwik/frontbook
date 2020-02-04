import React from 'react';
import { Input, InputOnChangeData } from 'semantic-ui-react';
import styled from '@emotion/styled';

import { ColumnFilterProps } from './DefaultColumnFilter';

// Number range UI for filtering
export const NumberRangeColumnFilter = <D extends object>({
  column: { filterValue = [], setFilter },
}: ColumnFilterProps<D>) => {
  return (
    <RangeWrapper>
      <RangeInput
        size="mini"
        value={filterValue[0] || ''}
        type="number"
        onChange={(e: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
          const val = data.value;
          setFilter((old: any = []) => [val ? parseInt(val, 10) : undefined, old[1]]);
        }}
        placeholder="min"
      />
      -
      <RangeInput
        size="mini"
        value={filterValue[1] || ''}
        type="number"
        onChange={(e: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
          const val = data.value;
          setFilter((old: any = []) => [old[0], val ? parseInt(val, 10) : undefined]);
        }}
        placeholder="max"
      />
    </RangeWrapper>
  );
};

const RangeWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 190px;
`;

const RangeInput = styled(Input)`
  width: 30%;
  min-width: 90px;
`;
