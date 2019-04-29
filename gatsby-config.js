module.exports = {

  siteMetadata: {
    title: 'Ponics Tech - Idustrial growing systems',
  },
  plugins: ['gatsby-plugin-react-helmet'],
  plugins: ['gatsby-inline-css'],
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-118827111-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
  ],
};