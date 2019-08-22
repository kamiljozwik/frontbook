const path = require('path');
const Octokit = require('@octokit/rest');
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

async function fetchGithubData (items) {
  for (const item of items) {
    const splitUrl = item.node.github ? item.node.github.split('/') : ['','','','facebook','react'];
    const owner = splitUrl[3];
    const repo = splitUrl[4];
    try {
      const { data } = await octokit.repos.get({owner, repo});
      console.log(data.name, data.stargazers_count);
    } catch {
      console.log('ERROR SADNESS...');
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  
  const { data } = await graphql(`
  {
    allContentfulToolEntry {
      edges {
        node {
          name
          subcategory
          github
        }
      }
    }
  }      
`)
  /* DO NOT DELETE */
  const waitForGithub = await fetchGithubData(data.allContentfulToolEntry.edges);

  return new Promise((resolve, reject) => {
    const subcategoryTemplate = path.resolve(`src/templates/subcategory.tsx`);
    resolve(
      graphql(`
      {
        allContentfulToolEntry {
          distinct(field: subcategory)
        }
      }      
    `).then(subcategories => {
        if (subcategories.errors) {
          reject(subcategories.errors);
        }

        subcategories.data.allContentfulToolEntry.distinct.forEach(subcategory => {
          const path = subcategory.replace('_', '/')
          !path.includes('empty') && createPage({
            path: path,
            component: subcategoryTemplate,
            context: {
              subcategory
            },
          });
        });
      })
    );
  });
};
