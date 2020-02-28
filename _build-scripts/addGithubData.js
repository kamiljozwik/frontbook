const parseGHUrl = require(`parse-github-url`);
const { GraphQLClient } = require(`graphql-request`);
const faker = require('faker');

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

function getMockedGithubData(name) {
  const tag = faker.system.semver();
  const releaseType = faker.random.number({ min: 0, max: 2 });
  const nextTag = tag
    .split('.')
    .map((el, index) => (index === releaseType ? parseInt(el) + 1 : el))
    .join('.');
  return {
    repository: {
      name: name,
      description: faker.lorem.sentence(),
      diskUsage: faker.random.number({ min: 0, max: 1000 }),
      issues: {
        totalCount: faker.random.number({ min: 0, max: 200 }),
      },
      stargazers: {
        totalCount: faker.random.number({ min: 0, max: 100000 }),
      },
      licenseInfo: {
        spdxId: faker.random.arrayElement(['MIT', 'NOASSERTION', 'Apache-2.0', 'BSD-3-Clause']),
        url: 'https://google.com',
      },
      pushedAt: faker.date.past(1),
      releases: {
        nodes: [
          {
            name: name,
            isPrerelease: faker.random.boolean(),
            isDraft: 'false',
            publishedAt: new Date(),
            tagName: tag,
            url: 'https://github.com/facebook/react/releases/tag/v16.12.0',
          },
          {
            name: name,
            isPrerelease: faker.random.boolean(),
            isDraft: 'false',
            publishedAt: faker.date.between(new Date(), new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 120)),
            tagName: nextTag,
            url: 'https://github.com/facebook/react/releases/tag/v16.13.0',
          },
        ],
      },
    },
  };
}

/** Main function */
const addGithubData = async (node, createNodeField) => {
  const repoMeta = node.github ? parseGHUrl(node.github) : null;
  const repoData = await (repoMeta
    ? process.env.GATSBY_USE_MOCKS
      ? getMockedGithubData(repoMeta.name)
      : getGithubData(repoMeta.owner, repoMeta.name, node.name)
    : null);

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
};

module.exports = addGithubData;
