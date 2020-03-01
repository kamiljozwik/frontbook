import React from 'react';
import { graphql } from 'gatsby';
import { Card, Image, Label, Segment, Icon } from 'semantic-ui-react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { Layout } from '../components';
import { SEO } from '../components/helpers';
import styled from '@emotion/styled';

type ogData = {
  title: string;
  description: string;
  image: string;
};
type resourceType = 'other' | 'blog' | 'podcast' | 'video';

export interface LearningData {
  learningResources: {
    edges: {
      node: {
        name: string;
        url: string;
        type: resourceType[];
        fields: {
          ogData: ogData;
        };
      };
    }[];
  };
}
interface LearningPageProps {
  data: LearningData;
}

interface ResourceProps {
  url: string;
  type: resourceType[];
  ogData: ogData;
}

export const Resource = ({ url, type, ogData }: ResourceProps) => {
  return (
    <Card as={OutboundLink} href={url} target="_blank" rel="noopener noreferrer">
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
        <Label basic>
          <Icon name={type.includes('video') ? 'youtube' : type.includes('blog') ? 'pencil' : 'globe'} /> {type}
        </Label>
      </Card.Content>
    </Card>
  );
};

const LearningPage = ({ data }: LearningPageProps) => {
  const {
    learningResources: { edges },
  } = data;
  return (
    <Layout pageType="page" title="Learning resources">
      <SEO title="learning resources" image="https://frontbook.s3-eu-west-1.amazonaws.com/images/learning.png" />
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
