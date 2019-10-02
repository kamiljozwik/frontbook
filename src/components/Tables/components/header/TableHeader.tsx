import { Header, Icon, SemanticICONS } from 'semantic-ui-react';

export const TableHeader = ({content= '', icon= 'star'}: {content?: string, icon?: SemanticICONS}) => (
  <Header size="small">
    {content === 'Name / framework' || content === 'Info' || content === '' ? '' : <Icon name={icon} style={{fontSize: '1em'}}/>}
    <Header.Content>{content}</Header.Content>
  </Header>
);
