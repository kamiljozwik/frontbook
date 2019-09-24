import { graphql } from 'gatsby';

export const toolDataFragment = graphql`
  fragment ToolsDataFragment on ContentfulToolEntry {
    name
    slogan {
      slogan
    }
    github
    website
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
`;
