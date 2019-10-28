import React from 'react';
import { Label, Icon } from 'semantic-ui-react';
import numeral from 'numeral';
import styled from '@emotion/styled';

interface FrameworkLabelProps {
  name: string;
  slogan: {
    slogan: string
  };
}

export const FrameworkLabel = ({ name, slogan }: FrameworkLabelProps) => {
  return (
  <>
    {(name && name.includes('React')) || (slogan && slogan.slogan.includes('React')) ? <Label size="mini" basic>React</Label> : ''}
  </>
  );
};
