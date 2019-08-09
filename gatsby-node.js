// exports.createPages = async function({ actions, graphql }) {
//   const { jsSubcategories } = await graphql(`
//     query {
//       allContentfulToolEntry(filter: {category: {eq: "js"}}) {
//         distinct(field: subcategory)
//       }
//     }
//   `);

//   jsSubcategories.allContentfulToolEntry.distinct.forEach(subcategory => {
//     const slug = subcategory;
//     actions.createPage({
//       path: slug,
//       component: require.resolve(`./src/templates/subcategory.tsx`),
//       context: { subcategory: subcategory },
//     })
//   })
// }

// exports.createPages = () => {
//   return new Promise((resolve, reject) => {
//     // do async work
//   })
// }