const { description, repository } = require('../../package')

module.exports = {
  base: '/quick-baker-docs/',
  title: 'Quick Baker',
  description: description,
  head: [
    ['link', { rel: 'icon', href: '/img/UN_32.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: '',
    docsDir: 'docs',
    editLinks: false,
    editLinkText: 'Edit on Github',
    lastUpdated: true,
    nav: [
      {
        text: 'Discord',
        link: 'https://discord.gg/sdnHHZpWbT',
      },
    ],
    sidebar: {
      '/': [
        {
          title: '',
          collapsable: false,
          children: [
            'quickstart',
            'workflow',
            'bake-groups',
            'groups',
            'objects',
            'maps',
            'bake',
          ]
        },
      ],
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
