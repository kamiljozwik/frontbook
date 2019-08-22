require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Frontstate`,
    description: `A State of Front`,
    author: `@kamiljozwik`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-typescript',
    `gatsby-plugin-emotion`,
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     typeName: "GitHub",
    //     fieldName: "github",
    //     // Url to query from
    //     url: "https://api.github.com/graphql",
    //     // HTTP headers
    //     headers: {
    //       Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    //     },
    //     // Additional options to pass to node-fetch
    //     fetchOptions: {},
    //   },
    // },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
