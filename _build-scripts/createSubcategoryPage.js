const path = require('path');

const subcategoryTemplate = path.resolve(`src/templates/subcategory.tsx`);

const createSubcategoryPage = (resp, createPage) => {
  resp.data.subcategories.distinct.forEach(subcategory => {
    const path = subcategory.replace('_', '/');
    !path.includes('empty') &&
      createPage({
        path: path,
        component: subcategoryTemplate,
        context: {
          subcategory,
        },
      });
  });
};

module.exports = createSubcategoryPage;
