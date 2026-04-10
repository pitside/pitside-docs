import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pitside For FRC Docs",
  description: "A management system built for the FIRST Robotics Competition",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API Docs', link: 'https://api.docs.pitside.app'},
    ],

    sidebar: [
      {
        text: 'Setup',
        items: [
          { text: 'What is Pitside?', link: '/welcome' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
