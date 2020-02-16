const axios = require('axios');

/**
 * Add field with NPM Data to tool's Node
 */
const parseNpmUrl = url => (url.includes('@') ? `@${url.split('@').slice(-1)[0]}` : url.split('/').slice(-1)[0]);

async function getNPMdata(package) {
  try {
    const response = await axios.get(`https://api.npmjs.org/downloads/point/last-week/${package}`);
    return response.data;
  } catch (error) {
    console.log('Cannot get data for npm package: ', package);
    return null;
  }
}

const addNpmData = async (node, createNodeField) => {
  const npmPackageName = node.npm ? parseNpmUrl(node.npm) : null;
  const npmData = await (npmPackageName ? getNPMdata(npmPackageName) : null);

  createNodeField({
    node,
    name: 'npmData',
    value: npmData,
  });
};

module.exports = addNpmData;
