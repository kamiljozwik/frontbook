import React from 'react';
import { ReleaseItemProps, ReleaseTags, ReleaseLabels } from '.';
import { Feed } from 'semantic-ui-react';
import moment from 'moment';
import { ToolIcon } from '..';
import { ToolName } from './';
import styled from '@emotion/styled';

export const ReleaseItemBasic = ({ tool, url, stars = 0, releases }: ReleaseItemProps) => {
  return (
    <ReleaseItemBasicWrapper>
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
    </ReleaseItemBasicWrapper>
  );
};

const ReleaseItemBasicWrapper = styled(Feed.Event)`
  &&&&& {
    width: 300px;
    padding: 20px 30px;
    margin: 10px;
    border-radius: 16px;
    box-shadow: 0 2px 7px -2px rgba(0, 0, 0, 0.3);
  }
`;
