import React from 'react';
import { Link } from 'gatsby';
import { Header, Segment, Grid, Label, List, Icon } from 'semantic-ui-react';
import styled from '@emotion/styled';
import numeral from 'numeral';

import { categoriesNames, CategoriesCodes, SubcategoryNode, colors, ListItem, ToolIcon } from '../../shared';
import { NpmLogo } from '../SVG';

interface CategorySegmentProps {
  code: CategoriesCodes;
  count: number;
  npmTops?: SubcategoryNode[];
  githubTops?: SubcategoryNode[];
}

interface TopsToolProps {
  tool: ListItem;
  type: 'npm' | 'github';
}

interface TopsToolsProps {
  tops: SubcategoryNode[];
  type: 'npm' | 'github';
}

const TopsTool = ({ tool, type }: TopsToolProps) => {
  return (
    <List.Item style={{margin: '5px 0'}}>
      <List.Content>
        <TopsToolName>
          <ToolIcon url={tool.website} style={{marginRight: '8px'}}/>
          {tool.name}
          <TopsToolDescription>
            <Icon size="small" name="arrow down" style={{color: colors.darkGrey}} />
            {type === 'npm'
              ? numeral(tool.fields.npmData!.downloads).format('0,0')
              : numeral(tool.fields.githubData!.stars).format('0,0')}
          </TopsToolDescription>
        </TopsToolName>
      </List.Content>
    </List.Item>
  );
};

const TopsToolsList = ({ tops, type }: TopsToolsProps) => {
  return (
    <>
      {
        type === 'npm'
          ? <Header>Top <NpmLogo/> weekly downloads:</Header>
          : <Header>Most starred:</Header>
      }
      <List>
        {tops.map(top => <TopsTool key={top.node.name} tool={top.node} type={type} />)}
      </List>
    </>
  );
};

export const CategoryCard = ({ code, count, npmTops, githubTops }: CategorySegmentProps) => (
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
      <Segment.Inline>{npmTops ? <TopsToolsList tops={npmTops} type="npm" /> : null}</Segment.Inline>
      <Segment.Inline> {githubTops ? <TopsToolsList tops={githubTops} type="github" /> : null}</Segment.Inline>
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
