import React from 'react';
import { Header, Icon, List, Segment } from 'semantic-ui-react';
import styled from '@emotion/styled';
import numeral from 'numeral';

import { colors, ListItem, ToolIcon, SubcategoryNode } from '../../shared';
import { mq } from '../layout';

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

export const TopsToolsList = ({ tops, type }: TopsToolsProps) => {
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

TopsToolsList.Wrapper = TopsToolsWrapper;
TopsToolsList.Segment = TopsToolSegment;