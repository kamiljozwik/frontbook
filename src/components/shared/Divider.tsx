import React from 'react';
import styled from '@emotion/styled';

interface DividerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: string;
}

export const Divider = ({ color = 'rgba(23, 124, 190, 0.5)', ...restProps }: DividerProps) => {
  console.log(restProps);
  return <StyledDivider color={color} {...restProps} />;
};

const StyledDivider = styled.div`
  margin: 10px 0;
  height: 0;
  border-image: ${props =>
    `linear-gradient(to right, rgba(0, 0, 0, 0), ${props.color}, rgba(0, 0, 0, 0)) 100% 0% 0% 0%`};
  border-style: solid;
`;
