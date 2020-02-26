import React from 'react';
import { graphql } from 'gatsby';
import { Card, Image, Label, Segment } from 'semantic-ui-react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { Layout } from '../components';
import { SEO } from '../components/helpers';
import styled from '@emotion/styled';

type ogData = {
  title: string;
  description: string;
  image: string;
};
type resourceType = 'other' | 'blog' | 'podcast';

interface LearningData {
  data: {
    learningResources: {
      edges: {
        node: {
          name: string;
          url: string;
          type: resourceType;
          fields: {
            ogData: ogData;
          };
        };
      }[];
    };
  };
}

interface ResourceProps {
  url: string;
  type: resourceType;
  ogData: ogData;
}

const Resource = ({ url, type, ogData }: ResourceProps) => {
  return (
    <Card as={OutboundLink} href={url}>
      {ogData.image && ogData.image !== 'https:' ? (
        <StyledImage src={ogData.image} wrapped ui={false} alt="learning resource" />
      ) : (
        <NoImage basic secondary>
          No image ;(
        </NoImage>
      )}
      <Card.Content>
        <Card.Header>{ogData.title}</Card.Header>
        <Card.Meta>{url}</Card.Meta>
        <Card.Description>{ogData.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Label basic>{type}</Label>
      </Card.Content>
    </Card>
  );
};

const LearningPage = ({ data }: LearningData) => {
  const {
    learningResources: { edges },
  } = data;
  return (
    <Layout pageType="page" title="Learning resources">
      <SEO title="learning resources" />
      <Card.Group itemsPerRow={3} stackable>
        {edges.map(el => (
          <Resource key={el.node.url} url={el.node.url} type={el.node.type} ogData={el.node.fields.ogData} />
        ))}
      </Card.Group>
    </Layout>
  );
};

export const query = graphql`
  query learningQuery {
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
`;

export default LearningPage;

const StyledImage = styled(Image)`
  width: auto;
  max-height: 240px;
  overflow: hidden;
`;

const NoImage = styled(Segment)`
  &&& {
    width: 100%;
    height: 240px;
    overflow: hidden;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
