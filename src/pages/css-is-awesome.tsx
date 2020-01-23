import React from 'react';

import { Layout } from '../components';
import { graphql } from 'gatsby';

interface CssIsAwesomeProps {
  data: {
    contentfulShowRoomEntry: {
      other: {
        links: string[];
      };
    };
  };
}

const CssIsAwesome = ({ data }: CssIsAwesomeProps) => (
  <Layout pageType="page" title="CSS is awesome">
    <h2>CSS is awesome</h2>
    {data.contentfulShowRoomEntry.other.links.map(link => (
      <div>{link}</div>
    ))}
  </Layout>
);

export const query = graphql`
  query CssAwesome {
    contentfulShowRoomEntry {
      other {
        links
      }
    }
  }
`;

export default CssIsAwesome;
