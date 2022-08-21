import fs from 'fs'
import path from 'path'
const projectDemoFolders = fs
  .readdirSync(path.resolve(__dirname, '../'))
  .filter(
    (folderName) =>
      ![
        'node_modules',
        '.vitepress',
        'public',
        '.postcssrc',
        'index.md',
      ].includes(folderName)
  )
export default {
  lang: 'en-US',
  title: 'LearnVue Demo',
  description: 'Vite & Vue powered static site generator.',
  cleanUrls: 'with-subfolders',
  lastUpdated: true,

  // Theme related configurations.
  themeConfig: {
    logo: {
      light: './logo-light.svg',
      dark: './logo-dark.svg',
    },
    projectDemoFolders: projectDemoFolders,
    siteTitle: false,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present LearnVue LLC',
    },
    nav: [
      { text: 'Website', link: 'https://learnvue.co/' },
      { text: 'YouTube', link: 'https://youtube.com/learnvue' },
    ],
    lastUpdatedText: 'Last Updated',
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
