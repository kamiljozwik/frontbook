const path = require('path');

const categoryTemplate = path.resolve(`src/templates/category.tsx`);

const createCategoryPage = (resp, createPage) => {
  const noSubcategories = ['frontops', 'seo', 'monitor', 'utils'];
  resp.data.categories.distinct.forEach(category => {
    const path = category;
    createPage({
      path: path,
      component: categoryTemplate,
      context: {
        category: noSubcategories.includes(category) ? `${category}_empty` : category,
      },
    });
  });
};

module.exports = createCategoryPage;
