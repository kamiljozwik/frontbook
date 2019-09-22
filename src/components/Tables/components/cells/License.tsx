import { Label } from 'semantic-ui-react';

export const License = ({ data }: any) => (
  <Label color={data === 'MIT' ? 'green' : 'orange'}>
    {data}
  </Label>
);
