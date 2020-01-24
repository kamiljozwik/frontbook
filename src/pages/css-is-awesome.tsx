import React from 'react';
import { graphql } from 'gatsby';

import { Layout, ExampleCard } from '../components';
import { SectionHeader } from '../components/shared';
import { ExamplesWrapper } from './ui-examples';

interface CssIsAwesomeProps {
  data: {
    contentfulShowRoomEntry: {
      other: {
        links: string[];
      };
    };
  };
}

const CssIsAwesome = ({ data }: CssIsAwesomeProps) => {
  const { links } = data.contentfulShowRoomEntry.other;
  return (
    <Layout pageType="page" title="CSS is awesome">
      <SectionHeader
        title="CSS is awesome"
        subtitle={`${links.length} proofs that CSS is limited only by our imagination`}
      />
      <ExamplesWrapper>
        {links.map(link => (
          <ExampleCard url={link} />
        ))}
      </ExamplesWrapper>
    </Layout>
  );
};

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
