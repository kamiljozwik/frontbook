import React from 'react';
import styled from '@emotion/styled';
import { Header, List } from 'semantic-ui-react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { LinkEntry } from '../../shared/types';
import { mq } from '../../shared';

interface LinksProps {
  links: LinkEntry[];
}

interface LinkItemProps {
  title: string;
  url: string;
}

const LinkItem = ({ title, url }: LinkItemProps) => (
  <List.Item>
    <List.Content>
      <List.Header as={OutboundLink} href={url} target="_blank" rel="noopener noreferrer">
        {title}
      </List.Header>
      <LinkUrl as={OutboundLink} href={url} target="_blank" rel="noopener noreferrer">
        {url}
      </LinkUrl>
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
  ${mq({
    margin: ['30px 20px', '30px 20px', '30px 0', '30px 0', '30px 0'],
  })}
`;

const LinkUrl = styled(List.Description)`
  &&&&& {
    ${mq({
      display: ['none', 'none', 'block', 'block', 'block'],
    })}
  }
`;
