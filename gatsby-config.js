module.exports = {
  siteMetadata: {
    siteTitle: `M4MADS`,
    defaultTitle: `M4MADS`,
    siteTitleShort: `M4MADS`,
    siteDescription: `homepage of M4MADS`,
    siteUrl: `https://m4mads.gatsbyjs.io/`,
    siteAuthor: `phpsmarter`,
    //siteImage: /* `/banner.png`, */
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        yamlFilesPath: `src/yamlFiles`,
        repositoryUrl: `https://github.com/jpedroschmitz/rocketdocs`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `M4MADS`,
        short_name: `M4MADS`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.jpg`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://m4mads.gatsbyjs.io/
        `,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
