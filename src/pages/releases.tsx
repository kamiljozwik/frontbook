import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { sortBy } from 'lodash';
import styled from '@emotion/styled';
import { Feed, Divider } from 'semantic-ui-react';

import { Layout, SectionHeader, ReleasesList } from '../components';
import { Release, SubcategoryNode, getLastReleases, ListItem, getReleaseType } from '../shared';
import { ReleaseItem, ReleasesFilters } from '../components/releases';

interface ReleasesProps {
  data: {
    allContentfulToolEntry: {
      edges: SubcategoryNode[];
    };
  };
}

export interface ReleaseItemProps {
  tool?: string;
  url?: string;
  stars?: number;
  releases: Release[];
}

const POPULAR = 10000;
const VERY_POPULAR = 50000;

export enum Popularity {
  all = 0,
  popular = POPULAR,
  veryPopular = VERY_POPULAR,
}

export enum Tags {
  all = 'all',
  patch = 'patch',
  minor = 'minor',
  major = 'major',
}

const applyFilters = (starsFilter: Popularity, tagFilter: Tags, ItemData?: ListItem) => {
  const toolStars = ItemData?.fields.githubData?.stars || 0;
  const toolReleases = ItemData?.fields.githubData?.repository.releases.nodes || [];
  const [releaseType] = getReleaseType(toolReleases);

  const starsFilterRule = toolStars > starsFilter;
  const tagFilterRule = tagFilter === Tags.all ? 'true' : tagFilter === releaseType;
  return starsFilterRule && tagFilterRule;
};

const Releases = ({ data }: ReleasesProps) => {
  const [starsFilter, setStarsFilter] = useState<Popularity>(Popularity.all);
  const [tagFilter, setTagFilter] = useState<Tags>(Tags.all);

  const releasesData = data.allContentfulToolEntry.edges
    .filter(e => e.node.fields.githubData)
    .map(e => e.node)
    .filter(getLastReleases)
    .filter(el => applyFilters(starsFilter, tagFilter, el))
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
      <ReleasesFilters
        starsFilter={starsFilter}
        tagFilter={tagFilter}
        setStarsFilter={setStarsFilter}
        setTagFilter={setTagFilter}
        popularLevel={POPULAR}
        veryPopularLevel={VERY_POPULAR}
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
              popularLevel={POPULAR}
              veryPopularLevel={VERY_POPULAR}
            />
          );
        })}
      </ReleasesList>
    </Layout>
  );
};

export default Releases;

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
