import React from 'react';
import { Label } from 'semantic-ui-react';
import styled from '@emotion/styled';

interface UnknownProps {
  content?: string;
}

export const Unknown = ({ content = 'no data' }: UnknownProps) => <UknownLabel>{content}</UknownLabel>;

const UknownLabel = styled(Label)`
  &&& {
    background: whitesmoke;
    color: grey;
  }
`;
