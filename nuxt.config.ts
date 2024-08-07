import dayjs from "dayjs";

export default defineNuxtConfig({
  modules: [
    "@bg-dev/nuxt-naiveui",
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@nuxtjs/i18n",
  ],

  runtimeConfig: {
    public: {
      updateTime: dayjs().add(new Date().getTimezoneOffset() + 480, "minutes").format("YYYY-MM-DD HH:mm:ss"),
    },
  },

  routeRules: {
    "/**": { prerender: true },
  },

  nitro: {
    prerender: {
      crawlLinks: process.env.NUXT_APP_CRAWL_LINKS !== "false",
    },
  },

  app: {
    head: {
      viewport: "width=device-width,initial-scale=1",
      link: [
        { rel: "icon", type: "image/svg+xml", href: `${process.env.NUXT_APP_BASE_URL ?? "/"}favicon.svg` },
        { rel: "apple-touch-icon", href: `${process.env.NUXT_APP_BASE_URL ?? "/"}apple-touch-icon.png` },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "七圣召唤赛事资料" },
        { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
        // { "http-equiv": "Cache-Control", "content": "no-cache, no-store, must-revalidate" },
        // { "http-equiv": "Pragma", "content": "no-cache" },
        // { "http-equiv": "Expires", "content": "0" },
      ],
      script: [
        "var sc_project=12936927; var sc_invisible=1; var sc_security=\"22ea8aae\";",
        { async: true, src: "https://www.statcounter.com/counter/counter.js" },
      ],
    },
  },

  css: [
    "@unocss/reset/tailwind-compat.css",
  ],
  postcss: {
    plugins: {
      "postcss-nested": {},
    },
  },
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "chs",
    baseUrl: "https://gjfleo.github.io/summoners-summit/",
    locales: [
      { code: "chs", name: "简体中文", iso: "zh-CN", isCatchallLocale: true },
      { code: "en", name: "English", iso: "en-US" },
    ],
  },
});
