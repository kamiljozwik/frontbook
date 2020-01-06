import React from 'react';
import { Header, Icon, SemanticICONS } from 'semantic-ui-react';

interface TableHeaderProps {
  content?: string;
  icon?: SemanticICONS;
  title?: string;
}

export const TableHeader = ({ content = '', icon = 'star', title }: TableHeaderProps) => (
  <Header size="small" title={title}>
    {content === 'Name / framework' || content === 'Info' || content === '' ? (
      ''
    ) : (
      <Icon name={icon} style={{ fontSize: '1em' }} />
    )}
    <Header.Content>{content}</Header.Content>
  </Header>
);
