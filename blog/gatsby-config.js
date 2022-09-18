
require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`
})


module.exports = {
  siteMetadata: {
    title: `Gatsby Blog Emma`,
    description: `ITDEV-164 Gatsby Blog`,
    author: `Emma`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,

    contact: {
      name:'Emmanuel',
      company:'Blong Inc',
      address:'160 W Crawford Ave Milwaukee Wi. 53207git add',

    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {

resolve:`gatsby-source-filesystem`,
options: {
  name: `images`,
  path:`${__dirname}/src/images`,
},
    },

  {    
//Contenful Log In Keys
resolve:`gatsby-source-contentful`,
options:{
  spaceId:`${process.env.SPACE_ID}`,
  accessToken:`${process.env.ACCESS_TOKEN}`,
  
} 
    },
    `gatsby-trasformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
