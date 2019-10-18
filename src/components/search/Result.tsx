import React from 'react';
import _ from 'lodash';
import styled from '@emotion/styled';
import numeral from 'numeral';
import { Link } from 'gatsby';
import { Header, Card, Label, Icon } from 'semantic-ui-react';

import { colors, ToolIcon } from '../../shared';

const parseSubcategory = (subcat: string) => {
  const category = subcat.split('_')[0];
  const subcategory = subcat.split('_')[1];

  return subcategory === 'empty' ? `/${category}/` : `/${category}/${subcategory}`;
};

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

export const Result = ({ node }: any) => (
  <Card>
    <Card.Content>
      <Card.Header>
        <CardHeader to={parseSubcategory(node.subcategory)}>
          {node.name}
          {/* <ToolIcon url={node.website} style={{height: '16px'}} /> */}
        </CardHeader>
      </Card.Header>
      <Card.Description>
        {node.slogan.slogan}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <ExtraData
        githubStars={node.fields.githubData && node.fields.githubData.stars}
        npmDownloads={node.fields.npmData && node.fields.npmData.downloads}
      />
    </Card.Content>
  </Card>
);

const CardHeader = styled(Link)`
    color: ${colors.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
