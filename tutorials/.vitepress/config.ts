export default {
  lang: 'en-US',
  title: 'LearnVue Demo',
  description: 'Vite & Vue powered static site generator.',
  cleanUrls: 'with-subfolders',

  // Theme related configurations.
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Demos',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present LearnVue LLC',
    },
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Configs', link: '/configs' },
      { text: 'Changelog', link: 'https://github.com/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/learnvueco/tutorial-code' },
      { icon: 'twitter', link: 'https://twitter.com/mattmaribojoc' },
    ],
    editLink: {
      pattern:
        'https://github.com/learnvueco/tutorial-code/blob/main/tutorials/:path',
      text: 'Edit this page on GitHub',
    },
  },
}
