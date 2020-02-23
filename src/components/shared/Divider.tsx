import React from 'react';
import styled from '@emotion/styled';

interface DividerProps {
  color?: string;
}

export const Divider = ({ color = 'blue' }: DividerProps) => {
  return <BlueDivider />;
};

const BlueDivider = styled.div`
  margin: 10px 0;
  height: 0;
  border-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(23, 124, 190, 0.5), rgba(0, 0, 0, 0)) 100% 0% 0% 0%;
  border-style: solid;
`;
