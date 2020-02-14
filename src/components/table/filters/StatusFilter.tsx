import React, { useCallback } from 'react';
import { Button } from 'semantic-ui-react';

import { ColumnFilterProps } from './DefaultColumnFilter';

// active/inactive UI for filtering
export const StatusFilter = <D extends object>({ column: { filterValue, setFilter } }: ColumnFilterProps<D>) => {
  const clickHandler = useCallback(
    (e, data) => {
      if (data.children.toLowerCase() === filterValue) {
        setFilter(undefined);
        return;
      }
      data.children.toLowerCase() === 'active' ? setFilter('active') : setFilter('inactive');
    },
    [filterValue, setFilter]
  );
  return (
    <Button.Group size="tiny">
      <Button positive={filterValue === 'active'} onClick={clickHandler}>
        Active
      </Button>
      <Button negative={filterValue === 'inactive'} onClick={clickHandler}>
        Inactive
      </Button>
    </Button.Group>
  );
};
