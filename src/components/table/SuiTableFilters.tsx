import React from 'react';
import { HeaderGroup, ColumnInstance } from 'react-table';
import { Segment, Form } from 'semantic-ui-react';

import styled from '@emotion/styled';

interface FiltersRowProps<D extends object> {
  headerGroup: HeaderGroup<D>;
}

interface ColumnWithFilters<D extends object> extends ColumnInstance<D> {
  disableFilters?: boolean;
  canFilter?: boolean;
}

export const SuiTableFilters = <D extends object>({ headerGroup }: FiltersRowProps<D>) => {
  return (
    <Segment attached>
      <Form>
        <WrappedFields data-testid="tableFilters">
          {headerGroup.headers.map(
            (column: ColumnWithFilters<D>) =>
              !column.disableFilters && (
                <FilterField key={column.Header as string}>
                  <label>{column.Header}</label>
                  {column.canFilter ? column.render('Filter') : null}
                </FilterField>
              )
          )}
        </WrappedFields>
      </Form>
    </Segment>
  );
};

const FilterField = styled(Form.Field)`
  &&&&& {
    margin: 0 0.5em;
  }
`;

const WrappedFields = styled(Form.Group)`
  flex-wrap: wrap;
`;
