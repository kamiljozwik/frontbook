const path = require('path');
const _ = require('lodash');

const ReleasesTemplate = path.resolve(`src/templates/Releases.tsx`);

const createReleasesPage = (releases, createPage) => {
  const sortedReleases = _.sortBy(releases, [
    function(o) {
      return o.releases[1].publishedAt;
    },
  ]).reverse();
  createPage({
    path: 'releases',
    component: ReleasesTemplate,
    context: {
      releases: sortedReleases,
    },
  });
};

module.exports = createReleasesPage;
