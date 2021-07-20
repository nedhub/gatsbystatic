/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {

    title: 'Gatsby test!!!!',
    author: 'nedhub',

  },
  plugins: [
    // {

    //   resolve: 'gatsby-source-contentful',
    //   options: {

    //     spaceId: zwvfst4w8r6c,
    //     accessToken: Cd0hVsN9QqfkXQxri6YeFT4lzxvPPNK4sFgEGvwGwxU
    //   }




    // },
    
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  




],
}
