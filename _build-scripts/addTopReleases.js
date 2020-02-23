const _ = require('lodash');

const getReleaseType = releases => {
  const tagRegEx = /(\d+\.)(\d+\.)(\d+)/gm;
  const oldTag = releases[0].tagName;
  const newTag = releases[1].tagName;
  const [mainOldTag] = oldTag.split('-');
  const [mainNewTag] = newTag.split('-');

  const oldTagClear = mainOldTag.match(tagRegEx);
  const newTagClear = mainNewTag.match(tagRegEx);

  const [oldMajor, oldMinor, oldPatch] = oldTagClear ? oldTagClear[0].split('.') : [];
  const [newMajor, newMinor, newPatch] = newTagClear ? newTagClear[0].split('.') : [];

  const releaseType =
    oldMajor !== newMajor && oldMajor < newMajor
      ? 'major'
      : oldMinor !== newMinor
      ? 'minor'
      : oldPatch !== newPatch
      ? 'patch'
      : 'other';
  return [releaseType, newMajor >= oldMajor];
};

const filterFn = el => {
  const [releaseType, isMajorCorrect] = getReleaseType(el.releases);
  const POPULAR_LEVEL = 30000;

  const isImportant = releaseType === 'major' || releaseType === 'minor';
  const isPopular = el.stars ? el.stars > POPULAR_LEVEL : false;
  return isImportant && isPopular && isMajorCorrect;
};

const addTopReleases = (createNodeId, createNode, createContentDigest, releases) => {
  const filtered = releases.filter(filterFn);

  const sortedReleases = _.sortBy(filtered, [
    function(o) {
      return o.releases[1].publishedAt;
    },
  ]).reverse();

  const TopReleases = {
    releases: sortedReleases,
  };

  const nodeContent = JSON.stringify(TopReleases);
  const nodeMeta = {
    id: createNodeId(`topReleases`),
    parent: null,
    children: [],
    internal: {
      type: `TopReleases`,
      mediaType: `text/html`,
      content: nodeContent,
      contentDigest: createContentDigest(TopReleases),
    },
  };

  const node = Object.assign({}, TopReleases, nodeMeta);
  createNode(node);
};

module.exports = addTopReleases;
