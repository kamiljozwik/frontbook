import React from 'react';

import { Layout } from '../components';
import { graphql } from 'gatsby';

interface UiExamplesProps {
  data: {
    contentfulShowRoomEntry: {
      useful: {
        links: string[];
      };
    };
  };
}

const UiExamples = ({ data }: UiExamplesProps) => (
  <Layout pageType="page" title="UI Examples">
    <h2>UI EXAMPLES</h2>
    {data.contentfulShowRoomEntry.useful.links.map(link => (
      <div>{link}</div>
    ))}
  </Layout>
);

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
