import { Label } from 'semantic-ui-react';
import styled from '@emotion/styled';

export const Unknown = () => (
  <UknownLabel>no data</UknownLabel>
);

const UknownLabel = styled(Label)`
  &&& {
    background: whitesmoke;
    color: grey;
  }
`;
