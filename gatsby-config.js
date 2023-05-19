module.exports = {
    plugins: [
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      'gatsby-plugin-postcss',
      'gatsby-plugin-image',
        {  
        resolve: 'gatsby-source-contentful',
        options: {
            spaceId: 't4o8653pq6k2',
            accessToken: 'kHjtR6-CyBRxXeaAoXKIkQ2V2vzsmEBWcTkzGOcYmDI'
            }
        },
    ]
}