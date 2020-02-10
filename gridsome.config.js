module.exports = {
  siteName: 'szybko. tanio. zajebiście.',
  siteUrl: 'http://varvanin.eu',
  siteDescription: 'tworzenie i projektowanie stron internetowych.',

  templates: {
    Work: '/:title'
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