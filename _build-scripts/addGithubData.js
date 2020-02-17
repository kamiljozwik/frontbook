const parseGHUrl = require(`parse-github-url`);
const { GraphQLClient } = require(`graphql-request`);
const moment = require('moment');
const ms = require('ms');

/** Used to gather repo details data */
const githubApiClient = process.env.GITHUB_TOKEN
  ? new GraphQLClient(`https://api.github.com/graphql`, {
      headers: {
        authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    })
  : console.log('GITHUB TOKEN NOT FOUND!');

/** Query Github with GraphQL */
async function getGithubData(owner, name, contentfulName) {
  try {
    const response = await githubApiClient.request(`
      query {
        repository(owner:"${owner}", name:"${name}") {
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
          releases(last: 2) {
            nodes {
              name
              isPrerelease
              isDraft
              publishedAt
              tagName
              url
            }
          }
        }
      }
    `);
    return response;
  } catch (error) {
    console.log('Cannot get data for Github repo: ', `${contentfulName} - ${owner}/${name}`);
    return null;
  }
}

/** Update array with releases from last 30 days */
const updateReleasesData = (repoData, releases, website) => {
  const now = moment();
  const publishedAt = repoData.repository.releases.nodes[1]
    ? repoData.repository.releases.nodes[1].publishedAt
    : '2000-01-01';
  const duration = moment.duration(now.diff(publishedAt));

  duration['_milliseconds'] < ms('30d') &&
    releases.push({
      name: repoData.repository.name,
      website,
      stars: repoData.repository.stargazers.totalCount,
      releases: repoData.repository.releases.nodes,
    });
};

/** Main function */
const addGithubData = async (node, createNodeField, releases) => {
  const repoMeta = node.github ? parseGHUrl(node.github) : null;
  const repoData = await (repoMeta ? getGithubData(repoMeta.owner, repoMeta.name, node.name) : null);

  const repoDataWithStars = repoData
    ? {
        ...repoData,
        stars: repoData.repository.stargazers.totalCount,
      }
    : null;

  createNodeField({
    node,
    name: 'githubData',
    value: repoDataWithStars,
  });

  repoData && updateReleasesData(repoData, releases, node.website);
};

module.exports = addGithubData;
