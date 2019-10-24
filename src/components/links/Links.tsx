import React from 'react';
import styled from '@emotion/styled';
import { Header, List } from 'semantic-ui-react';

import { LinkEntry } from '../../shared/types';

interface LinksProps {
  links: LinkEntry[];
}

interface LinkItemProps {
  title: string;
  url: string;
}

const LinkItem = ({title, url}: LinkItemProps) => (
  <List.Item>
    <List.Content>
      <List.Header
        as="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </List.Header>
      <List.Description
        as="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {url}
      </List.Description>
    </List.Content>
  </List.Item>
);

export const Links = ({ links }: LinksProps) => {
  return (
    <LinksWrapper>
      <Header>Useful links for further reading</Header>
      <List divided relaxed link bulleted size="large">
        {links.map(link => (
          <LinkItem key={link.node.url} title={link.node.title} url={link.node.url} />
        ))}
      </List>
    </LinksWrapper>
  );
};

const LinksWrapper = styled.div`
  margin-bottom: 50px;
`;
