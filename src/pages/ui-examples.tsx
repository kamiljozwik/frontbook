import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import { Layout, ExampleCard } from '../components';
import { SectionHeader } from '../components/shared';

interface UiExamplesProps {
  data: {
    contentfulShowRoomEntry: {
      useful: {
        links: string[];
      };
    };
  };
}

const UiExamples = ({ data }: UiExamplesProps) => {
  const { links } = data.contentfulShowRoomEntry.useful;
  return (
    <Layout pageType="page" title="UI Examples">
      <SectionHeader
        title="Real life UI examples"
        subtitle={`Browse ${links.length} examples and choose the ones you like best `}
      />
      <ExamplesWrapper>
        {links.map(link => (
          <ExampleCard url={link} />
        ))}
      </ExamplesWrapper>
    </Layout>
  );
};

export const ExamplesWrapper = styled.div`
  position: relative;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const query = graphql`
  query UiExamples {
    contentfulShowRoomEntry {
      useful {
        links
      }
    }
  }
`;

export default UiExamples;
