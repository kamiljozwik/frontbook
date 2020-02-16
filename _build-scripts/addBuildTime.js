const addBuildTime = (createNodeId, createNode, createContentDigest) => {
  const buildTime = new Date();

  const BuildData = {
    buildTime,
  };
  const nodeContent = JSON.stringify(BuildData);
  const nodeMeta = {
    id: createNodeId(`buildTime`),
    parent: null,
    children: [],
    internal: {
      type: `BuildTime`,
      mediaType: `text/html`,
      content: nodeContent,
      contentDigest: createContentDigest(BuildData),
    },
  };

  const node = Object.assign({}, BuildData, nodeMeta);
  createNode(node);
};

module.exports = addBuildTime;
