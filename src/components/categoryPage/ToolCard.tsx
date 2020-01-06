import React from 'react';
import { Card, Label, Icon } from 'semantic-ui-react';
import numeral from 'numeral';
import styled from '@emotion/styled';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { SubcategoryNode, colors, LinkEntry, mq } from '../../shared';
import { Links, ToolIcon } from '..';

interface ToolsTableProps {
  items: SubcategoryNode[];
  links: LinkEntry[];
}

interface ToolCardProps {
  toolData: SubcategoryNode;
}

interface ExtraDataProps {
  githubStars?: number;
  npmDownloads?: number;
}

const ExtraData = ({ githubStars, npmDownloads }: ExtraDataProps) => {
  return (
    <Label.Group size="tiny">
      {githubStars && (
        <Label basic>
          <Icon name="star" /> {numeral(githubStars).format('0,0')}
        </Label>
      )}
      {npmDownloads && (
        <Label basic>
          <Icon name="download" /> {numeral(npmDownloads).format('0,0')}
        </Label>
      )}
    </Label.Group>
  );
};

const ToolCard = ({ toolData }: ToolCardProps) => {
  return (
    <StyledCard>
      <Card.Content>
        <Card.Header>
          <CardHeader href={toolData.node.website} target="_blank" rel="noopener noreferrer">
            {toolData.node.name}
            <ToolIcon url={toolData.node.website} style={{ height: '16px' }} />
          </CardHeader>
        </Card.Header>
        <Card.Meta>{toolData.node.website}</Card.Meta>
        <Card.Description>{toolData.node.slogan.slogan}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <ExtraData
          githubStars={toolData.node.fields.githubData && toolData.node.fields.githubData.stars}
          npmDownloads={toolData.node.fields.npmData && toolData.node.fields.npmData.downloads}
        />
      </Card.Content>
    </StyledCard>
  );
};

export const CardGroup = ({ items, links }: ToolsTableProps) => {
  return (
    <>
      <CenteredCards>
        {items.map(tool => (
          <ToolCard key={tool.node.name} toolData={tool} />
        ))}
      </CenteredCards>
      {links.length > 0 && <Links links={links} />}
    </>
  );
};

const CenteredCards = styled(Card.Group)`
  &&& {
    margin-bottom: 100px;
    margin: 0 10px;
    ${mq({
      margin: ['0 10px', '0', '0', '0', '0'],
    })}
  }
`;

const CardHeader = styled(OutboundLink)`
  color: ${colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledCard = styled(Card)`
  &&& {
    ${mq({
      width: ['100%', '100%', '100%', '45%', '22%'],
    })}
  }
`;
