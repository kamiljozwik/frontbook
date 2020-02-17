import React from 'react';
import moment from 'moment';
import { sortBy } from 'lodash';

import { Layout } from '../components';
import { Release } from '../shared';
import { Feed, Label } from 'semantic-ui-react';
import styled from '@emotion/styled';

interface ContextRelease {
  name: string;
  website: string;
  stars: number;
  releases: Release[];
}

interface ReleasesProps {
  pageContext: {
    releases: ContextRelease[];
  };
}

interface ReleaseItemProps {
  tool: string;
  releases: Release[];
}

const ReleaseItem = ({ tool, releases }: ReleaseItemProps) => {
  // myString = myString.replace(/\D/g,''); // remove letters
  return (
    <ReleaseItemWrapper>
      <Feed.Label />
      <Feed.Content>
        <Feed.Date>{`${moment(releases[1].publishedAt).format('D MMM YYYY | HH:MM')} (${moment(
          releases[1].publishedAt
        ).fromNow()})`}</Feed.Date>
        <Feed.Summary>{tool}</Feed.Summary>
        <Feed.Extra>{` ${releases[0].tagName} -> ${releases[1].tagName} `}</Feed.Extra>
        <Feed.Extra>{releases[1].isPrerelease && <Label basic>prerelease</Label>}</Feed.Extra>
      </Feed.Content>
    </ReleaseItemWrapper>
  );
};

const Releases = ({ pageContext }: ReleasesProps) => {
  // const sortedReleases = sortBy(pageContext.releases, [
  //   function(o) {
  //     return o.releases[1].publishedAt;
  //   },
  // ]).reverse();
  return (
    <Layout pageType="page" title="Last 30 days releases">
      <Feed>
        {pageContext.releases.map(release => {
          return <ReleaseItem key={release.name} tool={release.name} releases={release.releases} />;
        })}
      </Feed>
    </Layout>
  );
};

export default Releases;

const ReleaseItemWrapper = styled(Feed.Event)`
  &&& {
    margin: 20px 0;
  }
`;
