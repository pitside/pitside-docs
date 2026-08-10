import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  description: "A management system built for the FIRST Robotics Competition",
  themeConfig: {
    search: {
      provider: "local",
    },
    siteTitle: false,
    logo: { dark: "/assets/logoLight.svg", light: "/assets/logoDark.svg" },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Docs", link: "/welcome" },
      { text: "API Docs", link: "https://api.docs.pitside.app" },
    ],

    sidebar: [
      {
        text: "Setup",
        items: [{ text: "What is Pitside?", link: "/welcome" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/pitside" }],
  },
})
