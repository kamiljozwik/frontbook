const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const subcategoryTemplate = path.resolve(`src/templates/subcategory.tsx`);
    resolve(
      graphql(`
      {
        allContentfulToolEntry {
          distinct(field: subcategory)
        }
      }      
    `).then(async (subcategories) => {
        if (subcategories.errors) {
          reject(subcategories.errors);
        }

        subcategories.data.allContentfulToolEntry.distinct.forEach(async (subcategory) => {
          const path = subcategory.replace('_', '/')
          !path.includes('empty') && createPage({
            path: path,
            component: subcategoryTemplate,
            context: {
              subcategory
            },
          });
        });
      })
    );
  });
};
