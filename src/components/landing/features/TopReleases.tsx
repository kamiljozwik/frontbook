import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SubcategoryNode, ListItem, getReleaseType, getLastReleases } from '../../../shared';
import { FeatureSection } from './FeatureSection';
import { Placeholder } from '../../SVG';

interface TopReleasesQuery {
  allContentfulToolEntry: {
    edges: SubcategoryNode[];
  };
}

const filterPopular = (itemData?: ListItem) => {
  const [releaseType, isMajorCorrect] = itemData?.fields.githubData?.repository.releases
    ? getReleaseType(itemData?.fields.githubData?.repository.releases.nodes)
    : [];
  const POPULAR_LEVEL = 30000;

  const isImportant = releaseType === 'major' || releaseType === 'minor';
  const isPopular =
    itemData?.fields.githubData && itemData?.fields.githubData.stars
      ? itemData?.fields.githubData.stars > POPULAR_LEVEL
      : false;
  return isImportant && isPopular && isMajorCorrect;
};

export const TopReleases = () => {
  const {
    allContentfulToolEntry: { edges },
  } = useStaticQuery(graphql`
    query TopReleases {
      allContentfulToolEntry {
        edges {
          node {
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
  `) as TopReleasesQuery;

  const releases = edges
    .filter(e => e.node.fields.githubData)
    .map(e => e.node)
    .filter(getLastReleases)
    .filter(filterPopular);

  return (
    <FeatureSection>
      <FeatureSection.Image>
        <Placeholder />
      </FeatureSection.Image>
      <FeatureSection.Info title="Last releases">
        <div>
          {releases.map(rel => (
            <div>{rel?.fields.githubData?.repository.name}</div>
          ))}
        </div>
      </FeatureSection.Info>
    </FeatureSection>
  );
};
