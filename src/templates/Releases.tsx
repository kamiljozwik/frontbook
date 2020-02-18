import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import styled from '@emotion/styled';

import { Layout, ToolIcon, SectionHeader } from '../components';
import { Release, colors } from '../shared';
import { Feed, Label, Icon, Popup, Divider } from 'semantic-ui-react';

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
  tool?: string;
  url?: string;
  stars?: number;
  releases: Release[];
}

const ReleaseTags = ({ releases }: ReleaseItemProps) => {
  const oldTag = releases[0].tagName;
  const newTag = releases[1].tagName;
  return (
    <Feed.Extra>
      <Label basic>
        <TagName href={releases[0].url} target="_blank" rel="noopener noreferrer">
          {oldTag}
        </TagName>
      </Label>
      <Icon name="arrow right" />
      <Label basic>
        <TagName href={releases[1].url} target="_blank" rel="noopener noreferrer">
          {newTag}
        </TagName>
      </Label>
    </Feed.Extra>
  );
};

const ReleaseLabels = ({ releases }: ReleaseItemProps) => {
  const tagRegEx = /(\d+\.)(\d+\.)(\d+)/gm;
  const oldTag = releases[0].tagName;
  const newTag = releases[1].tagName;
  const [mainOldTag] = oldTag.split('-');
  const [mainNewTag] = newTag.split('-');

  const oldTagClear = mainOldTag.match(tagRegEx);
  const newTagClear = mainNewTag.match(tagRegEx);

  console.log(oldTagClear);
  console.log(newTagClear);

  const [oldMajor, oldMinor, oldPatch] = oldTagClear ? oldTagClear[0].split('.') : [];
  const [newMajor, newMinor, newPatch] = newTagClear ? newTagClear[0].split('.') : [];

  const releaseType =
    oldMajor !== newMajor ? 'major' : oldMinor !== newMinor ? 'minor' : oldPatch !== newPatch ? 'patch' : 'other';
  console.log(releaseType);

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

const ReleaseItem = ({ tool, url, stars = 0, releases }: ReleaseItemProps) => {
  console.log(tool);
  return (
    <ReleaseItemWrapper>
      <Feed.Label>
        {stars > 50000 ? (
          <Popup
            content={`Very popular tool: ${numeral(stars).format('0,0')} github stars`}
            trigger={<Icon color="yellow" name="star" />}
          />
        ) : (
          stars > 10000 && (
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
        <ReleaseTags releases={releases} url={url} />
        <ReleaseLabels releases={releases} />
      </Feed.Content>
      <Feed.Label />
    </ReleaseItemWrapper>
  );
};

const Releases = ({ pageContext }: ReleasesProps) => {
  return (
    <Layout pageType="page" title="Last releases">
      <SectionHeader title="Releases from last 30 days" subtitle="Keep up to date with your favourite tools" />
      <Divider />
      <ReleasesList>
        {pageContext.releases.map(release => {
          return (
            <ReleaseItem
              key={release.name}
              tool={release.name}
              url={release.website}
              stars={release.stars}
              releases={release.releases}
            />
          );
        })}
      </ReleasesList>
    </Layout>
  );
};

export default Releases;

const ReleasesList = styled(Feed)`
  &&& {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const ReleaseItemWrapper = styled(Feed.Event)`
  &&&&& {
    margin: 20px 10px;
    min-width: 300px;
    width: 25%;
    box-shadow: 0 2px 7px -2px rgba(0, 0, 0, 0.3);
    padding: 20px 0;
  }
`;

const ToolName = styled.span`
  display: inline-block;
  font-size: 22px;
  margin: 10px 0 10px 5px;
`;

const TagName = styled(OutboundLink)`
  &&& {
    color: ${colors.black};
    opacity: 0.8;
  }
`;
