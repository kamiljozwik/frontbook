import React from 'react';
import { Feed, Label } from 'semantic-ui-react';

import { Release, getReleaseType } from '../../shared';

export interface ReleaseLabelsProps {
  releases: Release[];
}

export const ReleaseLabels = ({ releases }: ReleaseLabelsProps) => {
  const [releaseType] = getReleaseType(releases);

  return (
    <Feed.Extra>
      <Label
        color={
          releaseType === 'major'
            ? 'red'
            : releaseType === 'minor'
            ? 'purple'
            : releaseType === 'patch'
            ? 'teal'
            : undefined
        }
      >
        {releaseType}
      </Label>
      {releases[1].isPrerelease && <Label>prerelease</Label>}
    </Feed.Extra>
  );
};
