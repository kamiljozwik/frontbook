const addGithubData = require('./_build-scripts/addGithubData');
const addNpmData = require('./_build-scripts/addNpmData');
const addBundlephobiaData = require('./_build-scripts/addBundlephobiaData');
const createSubcategoryPage = require('./_build-scripts/createSubcategoryPage');
const createCategoryPage = require('./_build-scripts/createCategoryPage');
const createUIExamplesPage = require('./_build-scripts/createUIExamplesPage');
const addBuildTime = require('./_build-scripts/addBuildTime');
const addOgData = require('./_build-scripts/addOgData');

exports.onCreateNode = async ({ node, actions }) => {
  const { createNodeField } = actions;

  /**
   * Fetch additional data from Github, NPM and Bundlephobia for tools.
   */
  switch (node.internal.type) {
    case 'ContentfulToolEntry': {
      await Promise.all([
        addGithubData(node, createNodeField),
        addNpmData(node, createNodeField),
        addBundlephobiaData(node, createNodeField),
      ]);
      break;
    }
    case 'ContentfulLearningResourcesEntry': {
      await addOgData(node, createNodeField);
      break;
    }
    default: {
      break;
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      /* Query for data */
      graphql(`
        {
          categories: allContentfulToolEntry {
            distinct(field: category)
          }
          subcategories: allContentfulToolEntry {
            distinct(field: subcategory)
          }
          uiExamples: contentfulShowRoomEntry {
            useful {
              links
            }
            other {
              links
            }
          }
        }
      `).then(resp => {
        resp.errors && reject(resp.errors);

        /* Create page for each subcategory */
        createSubcategoryPage(resp, createPage);

        /* Create page for each category */
        createCategoryPage(resp, createPage);

        /* Create pages for CSS UI examples */
        createUIExamplesPage(resp, createPage);
      })
    );
  });
};

// https://github.com/gatsbyjs/gatsby/issues/11934
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith('develop')) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
    });
  }
};

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;
  addBuildTime(createNodeId, createNode, createContentDigest);
};
