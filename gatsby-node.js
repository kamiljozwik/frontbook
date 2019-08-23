const path = require('path');
const { GraphQLClient } = require(`graphql-request`);
const parseGHUrl = require(`parse-github-url`);

/**
 * Used to gather repo details data
 */
const githubApiClient = process.env.GITHUB_TOKEN
  ? new GraphQLClient(`https://api.github.com/graphql`, {
      headers: {
        authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    })
  : console.log('GITHUB TOKEN NOT FOUND!')

exports.onCreateNode = async ({ node, actions, getNode, reporter }) => {
  const { createNode, createNodeField } = actions;

  /**
   * Fetch additional data from Github for tools
   */
  switch (node.internal.type) {
    case 'ContentfulToolEntry': {
      const repoMeta = node.github ? parseGHUrl(node.github) : null;
      const repoData = await ( repoMeta 
        ? githubApiClient.request(`
          query {
            repository(owner:"${repoMeta.owner}", name:"${repoMeta.name}") {
              name
              stargazers {
                totalCount
              }
              createdAt
            }
          }
        `)
        : null
      );

      /**
       * Add field with data to tool's Node
       */
      createNodeField({
        node,
        name: 'githubData',
        value: repoData,
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
