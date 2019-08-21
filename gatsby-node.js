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
    `).then(subcategories => {
        if (subcategories.errors) {
          reject(subcategories.errors);
        }

        subcategories.data.allContentfulToolEntry.distinct.forEach(async (subcategory) => {

          const owner = "facebook";
          const name = "react";
          const { data } = await graphql(`
          query {
            github {
              repository (
                owner: "facebook"
                name: "react"
              ) {
                name
                description
              }
            }
          }
          `)
          console.log(data);

          const path = subcategory.replace('_', '/')
          !path.includes('empty') && createPage({
            path: path,
            component: subcategoryTemplate,
            context: { subcategory },
          });
        });
      })
    );
  });
};
