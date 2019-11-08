const path = require('path');
const { GraphQLClient } = require(`graphql-request`);
const parseGHUrl = require(`parse-github-url`);
const axios = require('axios');
// const ogs = require('open-graph-scraper');

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
   * Fetch additional data from Github, NPM and Bundlephobia for tools.
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
          `);
          return response;
        } catch(error) {
          console.log('Cannot get data for Github repo: ', `${owner}/${name}`);
          return null;
        }
      }

      const repoMeta = node.github ? parseGHUrl(node.github) : null;
      const repoData = await ( repoMeta ? getGithubData(repoMeta.owner, repoMeta.name) : null);

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

      /**
       * Add field with Bundlephobia Data to tool's Node
       */
      
      async function getBundlephobiaData(package) {
        const packageName = package.toLowerCase();
        try {
          const response = await axios.get(`https://bundlephobia.com/api/size?package=${packageName}`);
          return response && response.data;
        } catch(error) {
          console.log('Cannot get data from budlephobia for: ', packageName);
          return null;
        }
      }

      const bundlephobiaData = await ( repoMeta ? getBundlephobiaData(repoMeta.name) : null);

      const selectedBundlephobiaData = bundlephobiaData && {
        size: bundlephobiaData.size,
        gzip: bundlephobiaData.gzip,
        dependencyCount: bundlephobiaData.dependencyCount,
      };

      createNodeField({
        node,
        name: 'bundlephobiaData',
        value: selectedBundlephobiaData,
      })

      /**
       * Add field with Open Graph info for some tools
       */

      // async function getOgData(url) {
      //   console.log('fetching for:', url)
      //   try {
      //     const response = await ogs({'url': url});
      //     return response.data;
      //   } catch(error) {
      //     console.log('Cannot get og-data for url: ', url);
      //     console.log('error: ', error);
      //     return null;
      //   }
      // }

      // const ogData = await (node.website && node.category === 'monitor' ? getOgData(node.website) : null);
      
      // createNodeField({
      //   node,
      //   name: 'ogData',
      //   value: ogData,
      // })
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
