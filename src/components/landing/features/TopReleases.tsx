import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SubcategoryNode, GithubData, getReleaseType, getLastReleases } from '../../../shared';
import { FeatureSection } from './FeatureSection';
import { Placeholder } from '../../SVG';

interface TopReleasesQuery {
  allContentfulToolEntry: {
    edges: SubcategoryNode[];
  };
}

const filterPopular = (GHData?: GithubData) => {
  const [releaseType, isMajorCorrect] = GHData?.repository.releases
    ? getReleaseType(GHData.repository.releases.nodes)
    : [];
  const POPULAR_LEVEL = 30000;

  const isImportant = releaseType === 'major' || releaseType === 'minor';
  const isPopular = GHData && GHData.stars ? GHData.stars > POPULAR_LEVEL : false;
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
    .map(e => e.node.fields.githubData)
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
            <div>{rel?.repository.name}</div>
          ))}
        </div>
      </FeatureSection.Info>
    </FeatureSection>
  );
};
