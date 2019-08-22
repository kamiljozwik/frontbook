const path = require('path');
const Octokit = require('@octokit/rest')
const octokit = new Octokit()

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  // Data can come from anywhere, but for now create it manually
  const myData = {
    key: 123,
    foo: `The foo field of my node`,
    bar: `Baz`
  }

  const nodeContent = JSON.stringify(myData)

  const nodeMeta = {
    id: createNodeId(`my-data-${myData.key}`),
    parent: null,
    children: [],
    internal: {
      type: `MyNodeType`,
      mediaType: `text/html`,
      content: nodeContent,
      contentDigest: createContentDigest(myData)
    }
  }

  const node = Object.assign({}, myData, nodeMeta)
  createNode(node)
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const subcategoryTemplate = path.resolve(`src/templates/subcategory.tsx`);
    resolve(
      graphql(`
      {
        allContentfulToolEntry {
          distinct(field: subcategory)
        }
      }      
    `).then(async (subcategories) => {
        if (subcategories.errors) {
          reject(subcategories.errors);
        }

        /* github calls */
        // const { data } = await octokit.repos.get({
        //   owner: "facebook",
        //   repo: "react"
        // })
        // const repoData = data;
        /* github calls */

        subcategories.data.allContentfulToolEntry.distinct.forEach(async (subcategory) => {

          const path = subcategory.replace('_', '/')
          !path.includes('empty') && createPage({
            path: path,
            component: subcategoryTemplate,
            context: {
              subcategory,
              // repoData
            },
          });
        });
      })
    );
  });
};
