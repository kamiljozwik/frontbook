const path = require('path');

const UIExampleTemplate = path.resolve(`src/templates/UIExamples.tsx`);

function generateUIExamplesPages(path, links, title, createPage) {
  const uiExamplesPerPage = 10;
  const totalPages = Math.ceil(links.length / uiExamplesPerPage);
  for (let i = 1; i < totalPages + 1; i++) {
    createPage({
      path: `${path}/${i === 1 ? '' : i}`,
      component: UIExampleTemplate,
      context: {
        links: links.slice(i * uiExamplesPerPage - uiExamplesPerPage, i * uiExamplesPerPage),
        total: links.length,
        title,
        pagePath: path,
        currentPage: i,
        totalPages,
      },
    });
  }
}

const createUIExamplesPage = (resp, createPage) => {
  const { useful, other } = resp.data.uiExamples;
  generateUIExamplesPages('ui-examples', useful.links, 'UI Examples', createPage);
  generateUIExamplesPages('css-is-awesome', other.links, 'CSS is awesome', createPage);
};

module.exports = createUIExamplesPage;
