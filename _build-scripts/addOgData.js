/**
 * Add basic OgData from websites
 */
const urlMetadata = require('url-metadata');

const addOgData = async (node, createNodeField) => {
  const metadata = await urlMetadata(node.url);
  const ogData = {
    title: metadata.title || metadata['og:title'] || metadata['og:site_name'],
    description: metadata.description || metadata['og:description'],
    image: metadata['og:image'] || metadata.image,
  };

  createNodeField({
    node,
    name: 'ogData',
    value: ogData,
  });
};

module.exports = addOgData;
