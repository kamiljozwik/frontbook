import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { featuresData } from '../../../shared';
import { FeatureSection } from './components';
import { LinkButton } from '../..';
import { LearningData, Resource } from '../../../pages/learning';
import styled from '@emotion/styled';

export const LearningResources = () => {
  const {
    learningResources: { edges },
  } = useStaticQuery(graphql`
    query learningSingleQuery {
      learningResources: allContentfulLearningResourcesEntry {
        edges {
          node {
            name
            url
            type
            fields {
              ogData {
                title
                image
                description
              }
            }
          }
        }
      }
    }
  `) as LearningData;

  const {
    node: { type, url, fields },
  } = edges[Math.floor(Math.random() * edges.length)];

  return (
    <FeatureSection title={featuresData.learning.title} subtitle={featuresData.learning.description}>
      <FeatureSection.Info
        title={featuresData.learning.extraData.title}
        desc={featuresData.learning.extraData.description}
        textOnly
      >
        <LinkButton to={featuresData.learning.link}>More</LinkButton>
      </FeatureSection.Info>
      <FeatureSection.Info>
        <ResourceWrapper>
          <Resource type={type} url={url} ogData={fields.ogData} />
        </ResourceWrapper>
      </FeatureSection.Info>
    </FeatureSection>
  );
};

const ResourceWrapper = styled.div`
  &&& > a {
    width: 70%;
  }
`;
