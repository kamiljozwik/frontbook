import React from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
import numeral from 'numeral';
import { Feed, Popup, Icon } from 'semantic-ui-react';

import { Release } from '../../shared';
import { ToolIcon } from '..';
import { ReleaseTags, ReleaseLabels } from './';

export interface ReleaseItemProps {
  tool?: string;
  url?: string;
  stars?: number;
  releases: Release[];
  popularLevel?: number;
  veryPopularLevel?: number;
}

export const ReleaseItem = ({
  tool,
  url,
  stars = 0,
  releases,
  popularLevel = 10000,
  veryPopularLevel = 50000,
}: ReleaseItemProps) => {
  return (
    <ReleaseItemWrapper>
      <Feed.Label>
        {stars > veryPopularLevel ? (
          <Popup
            content={`Very popular tool: ${numeral(stars).format('0,0')} github stars`}
            trigger={<Icon color="yellow" name="star" />}
          />
        ) : (
          stars > popularLevel && (
            <Popup
              content={`Popular tool: ${numeral(stars).format('0,0')} github stars`}
              trigger={<Icon color="blue" name="star" />}
            />
          )
        )}
      </Feed.Label>
      <Feed.Content>
        <Feed.Date>
          {`${moment(releases[1].publishedAt).format('D MMM YYYY | HH:MM')} (${moment(
            releases[1].publishedAt
          ).fromNow()})`}
        </Feed.Date>
        <Feed.Summary>
          <ToolIcon url={url} style={{ width: '16px', height: 'auto' }} />
          <ToolName>{tool}</ToolName>
        </Feed.Summary>
        <ReleaseTags releases={releases} />
        <ReleaseLabels releases={releases} />
      </Feed.Content>
      <Feed.Label />
    </ReleaseItemWrapper>
  );
};

const ReleaseItemWrapper = styled(Feed.Event)`
  &&&&& {
    margin: 20px 10px;
    min-width: 300px;
    width: 25%;
    box-shadow: 0 2px 7px -2px rgba(0, 0, 0, 0.3);
    padding: 20px 0;
    border-radius: 16px;
  }
`;

export const ToolName = styled.span`
  display: inline-block;
  font-size: 22px;
  margin: 10px 0 10px 5px;
`;
