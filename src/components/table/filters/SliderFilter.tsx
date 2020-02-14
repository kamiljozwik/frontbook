import React from 'react';
import styled from '@emotion/styled';

import { ColumnFilterProps } from './DefaultColumnFilter';

// Slider UI for filtering
export const SliderColumnFilter = <D extends object>({
  column: { filterValue, setFilter, preFilteredRows, id },
}: ColumnFilterProps<D>) => {
  const [min, max] = React.useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.forEach(row => {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    return [min, max];
  }, [id, preFilteredRows]);

  return (
    <SliderCell>
      <input
        type="range"
        min={min}
        max={max}
        value={filterValue || min}
        onChange={e => {
          setFilter(parseInt(e.target.value, 10));
        }}
      />
      <SliderValue>min: {filterValue || min}</SliderValue>
    </SliderCell>
  );
};

const SliderCell = styled.div`
  position: relative;
`;

const SliderValue = styled.p`
  margin-bottom: 0;
  width: 100%;
  opacity: 50%;
  font-size: 0.8rem;
`;
