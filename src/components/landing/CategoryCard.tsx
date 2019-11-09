import React from 'react';
import { Link } from 'gatsby';
import { Header, Segment, Grid, Label, List, Icon } from 'semantic-ui-react';
import styled from '@emotion/styled';
import numeral from 'numeral';

import { categoriesNames, CategoriesCodes, SubcategoryNode, colors, ListItem, ToolIcon } from '../../shared';
import { CategoryImage } from '../SVG';
import { mq } from '../layout';

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
        <TopsToolData>
          <ToolIcon url={tool.website} style={{marginRight: '8px'}}/>
          <TopsToolName>{tool.name}</TopsToolName>
          <TopsToolDescription>
            <Icon size="small" name={type === 'npm' ? 'arrow down' : 'star'} style={{color: colors.darkGrey}} />
            {type === 'npm'
              ? numeral(tool.fields.npmData!.downloads).format('0,0')
              : numeral(tool.fields.githubData!.stars).format('0,0')}
          </TopsToolDescription>
        </TopsToolData>
      </List.Content>
    </List.Item>
  );
};

const TopsToolsList = ({ tops, type }: TopsToolsProps) => {
  return (
    <>
      {
        type === 'npm'
          ? <Header>Top weekly downloads:</Header>
          : <Header>Top starred repositories:</Header>
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
      <CardHeader to={`/${code}/`}>
        <ToolName size="huge">
          {categoriesNames[code].name}
          <CountLabel basic>
            Tools:
            <Label.Detail>{count}</Label.Detail>
          </CountLabel>
        </ToolName>
      </CardHeader>
      <Description>{categoriesNames[code].info}</Description>
      {githubTops && (
        <TopsToolsWrapper horizontal>
          <TopsToolSegment basic>{npmTops ? <TopsToolsList tops={npmTops} type="npm" /> : null}</TopsToolSegment>
          <TopsToolSegment basic> {githubTops ? <TopsToolsList tops={githubTops} type="github" /> : null}</TopsToolSegment>
        </TopsToolsWrapper>
      )}
      </Grid.Column>
    <ImageColumn>
      <CategoryImage code={code} />
    </ImageColumn>
  </CardWrapper>
);

const CardWrapper = styled(Grid.Row)`
  &&& {
    position: relative;
    min-height: 330px;
    ${mq({
      'width': ['90% !important', '90% !important', '90% !important', '90% !important', '75% !important'],
      'flexDirection': ['column', 'column', 'column', 'row', 'row'],
      '&&& .column': {
        width: ['100% !important', '100% !important', '100% !important', '50% !important', '50% !important'],
      },
      })}
  }
`;

const CardHeader = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ToolName = styled(Header)`
  &&& {
    display: block;
    font-size: 42px;
  }
`;
const CountLabel = styled(Label)`
  &&& {
    width: auto;
  }
`;

const Description = styled.p`
  color: ${colors.darkGrey};
  font-size: 16px;
`;

const TopsToolsWrapper = styled(Segment.Group)`
  &&&& {
    border: none;
    box-shadow: none;
  }
`;

const TopsToolSegment = styled(Segment)`
  &&&& {
    width: 50%;
    border: none;
    ${mq({
      padding: ['0', '1em 1em', '1em 1em', '1em 1em', '1em 1em'],
    })}
  }
`;

const TopsToolData = styled(List.Header)`
  &&&& {
    display: flex;
    align-items: center;
  }
`;

const TopsToolName = styled.span`
    font-weight: 500;
    display: inline-block;
    max-width: 55%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const TopsToolDescription = styled.span`
    color: ${colors.darkGrey};
    font-weight: 500;
    font-size: 12px;
    margin-left: 10px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${mq({
      display: ['none', 'initial', 'initial', 'initial', 'initial'],
    })}
`;

const ImageColumn = styled(Grid.Column)`
  &&&& {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
