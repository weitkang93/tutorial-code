export default {
  lang: 'en-US',
  title: 'LearnVue Demo',
  description: 'Vite & Vue powered static site generator.',
  lastUpdated: true,
  // Theme related configurations.
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Demos',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present LearnVue LLC',
    },
    sidebar: false,
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Configs', link: '/configs' },
      { text: 'Changelog', link: 'https://github.com/...' },
    ],
    lastUpdatedText: 'Updated Date',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/learnvueco/tutorial-code' },
      { icon: 'twitter', link: 'https://twitter.com/mattmaribojoc' },
    ],
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
  },
}
