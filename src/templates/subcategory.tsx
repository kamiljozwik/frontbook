import React from 'react';
import { graphql, Link } from 'gatsby';
import { Button } from 'semantic-ui-react';

import { Layout } from '../components';
import { ToolsTable } from '../components/Tables';
import { categoriesNames } from '../shared';
import { SubcategoryProps, CategoriesCodes } from '../shared/types';

export default ({ data, pageContext }: SubcategoryProps) => {
  const category = pageContext.subcategory.split('_')[0] as CategoriesCodes;
  const subcategory = pageContext.subcategory.split('_')[1];
  return (
    <Layout category={`${categoriesNames[category].name} / ${subcategory}`}>
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
            npmData {
              downloads
            }
            githubData {
              repository {
                name
                description
                diskUsage
                issues {
                  totalCount
                }
                stargazers {
                  totalCount
                }
                licenseInfo {
                  spdxId
                  url
                }
                pushedAt
              }
            }
          }
        }
      }
    }
  }
`;
