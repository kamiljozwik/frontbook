import React from 'react';
import { Link } from 'gatsby';
import { Header, Grid, Label, List, Icon } from 'semantic-ui-react';
import styled from '@emotion/styled';
import numeral from 'numeral';

import { categoriesNames, CategoriesCodes, SubcategoryNode, colors, ListItem, ToolIcon } from '../../shared';
import { NpmLogo } from '../SVG';

interface CategorySegmentProps {
  code: CategoriesCodes;
  count: number;
  tops?: SubcategoryNode[];
}

interface TopsToolProps {
  tool: ListItem;
}

interface TopsToolsProps {
  tops: SubcategoryNode[];
}

const TopsTool = ({ tool }: TopsToolProps) => {
  return (
    <List.Item style={{margin: '5px 0'}}>
      <List.Content>
        <TopsToolName>
          <ToolIcon url={tool.website} style={{marginRight: '8px'}}/>
          {tool.name}
          <TopsToolDescription>
            <Icon size="small" name="arrow down" style={{color: colors.darkGrey}} />
            {numeral(tool.fields.npmData!.downloads).format('0,0')}
          </TopsToolDescription>
        </TopsToolName>
      </List.Content>
    </List.Item>
  );
};

const TopsToolsList = ({ tops }: TopsToolsProps) => {
  return (
    <>
      <Header>Top <NpmLogo/> weekly downloads:</Header>
      <List>
        {tops.map(top => <TopsTool key={top.node.name} tool={top.node}/>)}
      </List>
    </>
  );
};

export const CategoryCard = ({ code, count, tops }: CategorySegmentProps) => (
  <CardWrapper columns={2}>
    <Grid.Column>
      <ToolName as={Link} to={`/${code}/`} size="huge">
        {categoriesNames[code].name}
        <CountLabel basic as={Link} to={`/${code}/`}>
          Tools:
          <Label.Detail>{count}</Label.Detail>
        </CountLabel>
      </ToolName>
      <Description>{categoriesNames[code].info}</Description>
      {tops ? <TopsToolsList tops={tops}/> : null}
    </Grid.Column>
    <Grid.Column>
      image here
    </Grid.Column>
  </CardWrapper>
);

const CardWrapper = styled(Grid.Row)`
  &&& {
    position: relative;
    width: 60vw !important;
    min-height: 250px;
  }
`;

const ToolName = styled(Header)`
  &&& {
    display: block;
    font-size: 36px;
  }
`;
const CountLabel = styled(Label)`
  &&& {
    width: auto;
  }
`;

const Description = styled.p`
  color: ${colors.darkGrey};
`;

const TopsToolName = styled(List.Header)`
  &&&& {
    display: flex;
    align-items: center;
  }
`;

const TopsToolDescription = styled.span`
    color: ${colors.darkGrey};
    font-weight: 500;
    font-size: 12px;
    margin-left: 10px;
    position: relative;
`;
