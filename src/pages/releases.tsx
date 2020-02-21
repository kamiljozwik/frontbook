import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { sortBy } from 'lodash';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import styled from '@emotion/styled';
import { Feed, Label, Icon, Popup, Divider } from 'semantic-ui-react';

import { Layout, ToolIcon, SectionHeader } from '../components';
import { Release, colors, getReleaseType, SubcategoryNode, getLastReleases } from '../shared';
import { graphql } from 'gatsby';

interface ReleasesQuery {
  allContentfulToolEntry: {
    edges: SubcategoryNode[];
  };
}
interface ReleasesProps {
  data: ReleasesQuery;
}

export interface ReleaseItemProps {
  tool?: string;
  url?: string;
  stars?: number;
  releases: Release[];
}

export const ReleaseTags = ({ releases }: ReleaseItemProps) => {
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

export const ReleaseLabels = ({ releases }: ReleaseItemProps) => {
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

export const ReleaseItem = ({ tool, url, stars = 0, releases }: ReleaseItemProps) => {
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

const Releases = ({ data }: ReleasesProps) => {
  const releasesData = data.allContentfulToolEntry.edges
    .filter(e => e.node.fields.githubData)
    .map(e => e.node)
    .filter(getLastReleases)
    .map(el => ({
      name: el.fields.githubData?.repository.name,
      website: el.website,
      stars: el.fields.githubData?.stars,
      releases: el.fields.githubData?.repository.releases.nodes,
    }));

  const sortedReleases = sortBy(releasesData, [o => o.releases && o.releases[1].publishedAt]).reverse();

  return (
    <Layout pageType="page" title="Last releases">
      <SectionHeader
        title="Releases from last 30 days"
        subtitle="Keep up to date with your favourite tools"
        showDivider={false}
      />
      <Divider />
      <ReleasesList>
        {sortedReleases.map(release => {
          return (
            <ReleaseItem
              key={release.name}
              tool={release.name}
              url={release.website}
              stars={release.stars}
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              releases={release.releases!}
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
    border-radius: 16px;
  }
`;

export const ToolName = styled.span`
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

export const query = graphql`
  query ReleasesQuery {
    allContentfulToolEntry {
      edges {
        node {
          website
          fields {
            githubData {
              stars
              repository {
                name
                releases {
                  nodes {
                    name
                    isPrerelease
                    isDraft
                    publishedAt
                    tagName
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
