import React from 'react';
import { Card, Label, Icon } from 'semantic-ui-react';
import numeral from 'numeral';
import styled from '@emotion/styled';

import { ToolIcon, SubcategoryNode, colors } from '../../shared';
import { mq } from '../layout';

interface ToolsTableProps {
  items: SubcategoryNode[];
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
      {githubStars && <Label basic>
        <Icon name="star" /> {numeral(githubStars).format('0,0')}
      </Label>}
      {npmDownloads && <Label basic>
        <Icon name="download" /> {numeral(npmDownloads).format('0,0')}
      </Label>}
    </Label.Group>
  );
};

export const ToolCard = ({ toolData }: ToolCardProps) => {
  return (
    <StyledCard>
      <Card.Content>
        <Card.Header>
          <CardHeader href={toolData.node.website} target="_blank" rel="noopener noreferrer">
            {toolData.node.name}
            <ToolIcon url={toolData.node.website} style={{height: '16px'}} />
          </CardHeader>
        </Card.Header>
        <Card.Meta>
          {toolData.node.website}
        </Card.Meta>
        <Card.Description>
          {toolData.node.slogan.slogan}
        </Card.Description>
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

export const CardGroup = ({ items }: ToolsTableProps) => {
  return (
    <Card.Group centered style={{marginBottom: '100px'}}>
      {items.map(tool => <ToolCard key={tool.node.name} toolData={tool}  />)}
      {items.map(tool => <ToolCard key={tool.node.name} toolData={tool}  />)}
    </Card.Group>
  );
};

const CardHeader = styled.a`
    color: ${colors.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledCard = styled(Card)`
    &&& {
      ${mq({
        width: ['80%', '100%', '100%', '45%', '22%'],
      })}
    }
`;
