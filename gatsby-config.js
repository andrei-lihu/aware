const path = require('path');

module.exports = {
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, `src`, `images`),
      },
    },
  ],
}