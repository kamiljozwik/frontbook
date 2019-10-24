import React from 'react';
import _ from 'lodash';
import styled from '@emotion/styled';
import numeral from 'numeral';
import { Link } from 'gatsby';
import { Card, Label, Icon, SearchResultProps } from 'semantic-ui-react';

import { colors, ToolIcon } from '../../shared';

export interface ResultsProps extends SearchResultProps {
  title: string;
  description: string;
  website?: string;
  subcategory: string;
  stars?: number;
  downloads?: number;
}
interface ExtraDataProps {
  githubStars?: number;
  npmDownloads?: number;
}

const parseSubcategory = (subcat: string) => {
  const category = subcat.split('_')[0];
  const subcategory = subcat.split('_')[1];

  return subcategory === 'empty' ? `/${category}/` : `/${category}/${subcategory}`;
};

const NoData = () => <span style={{color: 'grey'}}>no data</span>;

const ExtraData = ({ githubStars, npmDownloads }: ExtraDataProps) => {
  return (
    <Label.Group size="tiny">
      <Label basic>
        <Icon name="star" color={githubStars ? undefined : 'grey'}/>
        {githubStars ? ` ${numeral(githubStars).format('0,0')}` : <NoData/>}
      </Label>
      <Label basic>
        <Icon name="download" color={npmDownloads ? undefined : 'grey'} />
        {npmDownloads ? ` ${numeral(npmDownloads).format('0,0')}` : <NoData/>}
      </Label>
    </Label.Group>
  );
};

export const Result = (props: any) => (
  <StyledCard fluid>
    <Card.Content>
      <Card.Header>
        <CardHeader to={parseSubcategory(props.subcategory)}>
          {props.title}
          <ToolIcon url={props.website} style={{width: '16px', height: 'auto'}} />
        </CardHeader>
        <Card.Meta>
        <ExtraData
          githubStars={props.stars}
          npmDownloads={props.downloads}
        />
      </Card.Meta>
      </Card.Header>
      <Card.Description style={{fontSize: '16px'}}>
        {props.description}
      </Card.Description>
    </Card.Content>
  </StyledCard>
);

const StyledCard = styled(Card)`
  &&& {
    border-radius: 0;
    &:hover {
      background: ${colors.grey};
    }
  }
`;

const CardHeader = styled(Link)`
    color: ${colors.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
