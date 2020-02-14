module.exports = {
  siteName: 'szybko. tanio. zajebiście.',
  siteUrl: 'http://varvanin.eu',
  siteDescription: 'tworzenie i projektowanie stron internetowych.',

  templates: {
    Work: '/:title'
  },

  icon: {
    favicon: {
      src: './src/favicon.png',
      sizes: [16, 32]
    },
    touchicon: {
      src: './src/touch-icon.png',
      sizes: [76, 152, 120, 167],
      precomposed: true
    }
  },

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Work',
        path: 'content/works/*.md',
        refs: {
        }
      }
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}