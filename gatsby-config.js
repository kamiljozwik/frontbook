require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Frontbook`,
    description: `Best front-end tools and resources in one place`,
    author: `kamiljozwik`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-typescript',
    `gatsby-plugin-emotion`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-151886393-1",
        head: true,
        respectDNT: false,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        pageTransitionDelay: 0,
        siteSpeedSampleRate: 10,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Frontbook`,
        short_name: `Frontbook`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
