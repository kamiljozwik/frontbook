/**
 * Add field with Bundlephobia Data to tool's Node
 */
const axios = require('axios');
const faker = require('faker');

async function getBundlephobiaData(packageName) {
  try {
    const response = await axios.get(`https://bundlephobia.com/api/size?package=${packageName}`);
    return response && response.data;
  } catch (error) {
    console.log('Cannot get data from budlephobia for: ', packageName);
    return null;
  }
}

function getMockedBundlephobiaData() {
  const size = faker.random.number({ min: 200, max: 400000 });
  const deps = faker.random.number({ min: 0, max: 5 });
  return { size, gzip: Math.ceil(size / 5), dependencyCount: deps };
}

const parseNpmUrl = url => (url.includes('@') ? `@${url.split('@').slice(-1)[0]}` : url.split('/').slice(-1)[0]);

const addBundlephobiaData = async (node, createNodeField) => {
  const npmPackageName = node.npm ? parseNpmUrl(node.npm) : null;
  const bundlephobiaData = await (npmPackageName
    ? process.env.GATSBY_USE_MOCKS
      ? getMockedBundlephobiaData()
      : getBundlephobiaData(npmPackageName)
    : null);
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
