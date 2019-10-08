import { graphql } from 'gatsby';

export const toolDataFragment = graphql`
  fragment ToolsDataFragment on ContentfulToolEntry {
    name
    slogan {
      slogan
    }
    github
    npm
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

export const categoryTopsFragment = graphql`
  fragment CategoryTopsFragment on ContentfulToolEntry {
    name
		website
		npm
    fields {
      npmData {
        downloads
      }
      githubData {
        stars
      }
    }
  }
`;
