import React from 'react';
import { SemanticICONS, Segment, Header } from 'semantic-ui-react';
import styled from '@emotion/styled';

export interface TableTitle {
  icon?: SemanticICONS;
  content: string;
  button?: React.ReactElement;
}

interface SuiTableTitleProps {
  title: TableTitle;
}

export const SuiTableTitle = (props: SuiTableTitleProps) => {
  return (
    <TableTitle attached="top" color="blue" data-testid="tableTitle">
      <Header icon={props.title.icon} content={props.title.content} size="medium" />
      {props.title.button}
    </TableTitle>
  );
};

const TableTitle = styled(Segment)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header {
    margin: 0;
  }
`;
