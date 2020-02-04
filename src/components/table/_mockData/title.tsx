import { TableTitle } from '../SuiTableTitle';
import React from 'react';
import { Button } from 'semantic-ui-react';

const ActionButton = () => (
  <Button primary onClick={() => alert('Handle edit...')}>
    Edit
  </Button>
);

export const title: TableTitle = {
  content: 'Table title here',
  icon: 'calendar check outline',
  button: <ActionButton />,
};
