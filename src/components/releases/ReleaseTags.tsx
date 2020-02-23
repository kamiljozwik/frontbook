import React from 'react';
import styled from '@emotion/styled';
import { Feed, Label, Icon } from 'semantic-ui-react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { getReleaseType, Release, colors } from '../../shared';

interface ReleaseTagsProps {
  releases: Release[];
}

export const ReleaseTags = ({ releases }: ReleaseTagsProps) => {
  const oldTag = releases[0].tagName;
  const newTag = releases[1].tagName;
  const isMajorCorrect = getReleaseType(releases)[1];
  return (
    <Feed.Extra>
      <Label basic>
        <TagName href={releases[0].url} target="_blank" rel="noopener noreferrer">
          {oldTag}
        </TagName>
      </Label>
      {isMajorCorrect ? <Icon name="arrow right" /> : <Icon name="question circle" />}
      <Label basic>
        <TagName href={releases[1].url} target="_blank" rel="noopener noreferrer">
          {newTag}
        </TagName>
      </Label>
    </Feed.Extra>
  );
};

const TagName = styled(OutboundLink)`
  &&& {
    color: ${colors.black};
    opacity: 0.8;
  }
`;
