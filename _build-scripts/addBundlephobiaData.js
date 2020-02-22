/**
 * Add field with Bundlephobia Data to tool's Node
 */
const axios = require('axios');

async function getBundlephobiaData(packageName) {
  try {
    const response = await axios.get(`https://bundlephobia.com/api/size?package=${packageName}`);
    return response && response.data;
  } catch (error) {
    console.log('Cannot get data from budlephobia for: ', packageName);
    return null;
  }
}
const parseNpmUrl = url => (url.includes('@') ? `@${url.split('@').slice(-1)[0]}` : url.split('/').slice(-1)[0]);

const addBundlephobiaData = async (node, createNodeField) => {
  const npmPackageName = node.npm ? parseNpmUrl(node.npm) : null;
  const bundlephobiaData = await (npmPackageName ? getBundlephobiaData(npmPackageName) : null);
  const selectedBundlephobiaData = bundlephobiaData && {
    size: bundlephobiaData.size,
    gzip: bundlephobiaData.gzip,
    dependencyCount: bundlephobiaData.dependencyCount,
  };

  createNodeField({
    node,
    name: 'bundlephobiaData',
    value: selectedBundlephobiaData,
  });
};

module.exports = addBundlephobiaData;
