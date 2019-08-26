const path = require('path');
const { GraphQLClient } = require(`graphql-request`);
const parseGHUrl = require(`parse-github-url`);
const axios = require('axios');

/**
 * Used to gather repo details data
 */
const githubApiClient = process.env.GITHUB_TOKEN
  ? new GraphQLClient(`https://api.github.com/graphql`, {
      headers: {
        authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    })
  : console.log('GITHUB TOKEN NOT FOUND!');

exports.onCreateNode = async ({ node, actions, getNode, reporter }) => {
  const { createNode, createNodeField } = actions;

  /**
   * Fetch additional data from Github and NPM for tools
   */
  switch (node.internal.type) {
    case 'ContentfulToolEntry': {
      /**
       * Add field with Github Data to tool's Node
       */
      async function getGithubData(owner, name) {
        try {
          const response = await githubApiClient.request(`
            query {
              repository(owner:"${owner}", name:"${name}") {
                name
                stargazers {
                  totalCount
                }
                createdAt
              }
            }
          `);
          return response;
        } catch(error) {
          console.log('Cannot get data for Github repo: ', name);
          return null;
        }
      }

      const repoMeta = node.github ? parseGHUrl(node.github) : null;
      const repoData = await ( repoMeta ? getGithubData(repoMeta.owner, repoMeta.name) : null);

      createNodeField({
        node,
        name: 'githubData',
        value: repoData,
      })

      /**
       * Add field with NPM Data to tool's Node
       */
      const parseNpmUrl = url => url.includes('@')
        ? `@${url.split('@').slice(-1)[0]}`
        : url.split('/').slice(-1)[0];

      async function getNPMdata(package) {
        try {
          const response = await axios.get(`https://api.npmjs.org/downloads/point/last-week/${package}`);
          return response.data;
        } catch(error) {
          console.log('Cannot get data for npm package: ', package);
          return null;
        }
      }

      const npmPackageName = node.npm ? parseNpmUrl(node.npm) : null;
      const npmData = await (npmPackageName ? getNPMdata(npmPackageName) : null);

      createNodeField({
        node,
        name: 'npmData',
        value: npmData,
      })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const subcategoryTemplate = path.resolve(`src/templates/subcategory.tsx`);
    resolve(
      /**
       * Get all possible subcategories
       */
      graphql(`
      {
        allContentfulToolEntry {
          distinct(field: subcategory)
        }
      }      
    `)
    .then(subcategories => {
      subcategories.errors && reject(subcategories.errors);

      /**
       * Create page for each subcategory
       */
      subcategories.data.allContentfulToolEntry.distinct.forEach(subcategory => {
        const path = subcategory.replace('_', '/');
        !path.includes('empty') && createPage({
          path: path,
          component: subcategoryTemplate,
          context: {
            subcategory
          },
        });
      });
    }));
  });
};
