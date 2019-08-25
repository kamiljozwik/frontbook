import React from 'react';
import { graphql, Link } from 'gatsby';
import { Button } from 'semantic-ui-react';

import Layout from '../components/layout';
import { ToolsTable } from '../components/Tables';
import { SubcategoryProps} from '../shared/types';

export default ({ data, pageContext }: SubcategoryProps) => {
  return (
    <Layout>
      <div>
        <h2>{pageContext.subcategory}</h2>
      </div>
      <Button primary as={Link} to={`/${pageContext.subcategory.split('_')[0]}`}>Back</Button>
      <ToolsTable items={data.allContentfulToolEntry.edges} />
    </Layout>
  );
};

export const query = graphql`
  query($subcategory: String!) {
    allContentfulToolEntry(filter: {subcategory: {eq: $subcategory}}) {
      edges {
        node {
          name
          slogan {
            slogan
          }
          github
          fields {
            githubData {
              repository {
                name
                stargazers {
                  totalCount
                }
              }
            }
          }
        }
      }
    }
  }
`;
