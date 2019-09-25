import { Label } from 'semantic-ui-react';

// TODO: use in columns file
export const License = ({ data }: {data: string}) => (
  <Label color={data === 'MIT' ? 'green' : 'orange'}>
    {data}
  </Label>
);
