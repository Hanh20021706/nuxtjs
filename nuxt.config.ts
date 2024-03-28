export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  ssr: false,
  // i18n
  // i18n: {
  //   // Module Options
  //   lazy: true,
  //   langDir: "locales",
  //   strategy: "prefix_except_default",
  //   locales: [
  //     {
  //       code: "en",
  //       iso: "en-US",
  //       name: "English",
  //       file: "en-US.json", // Tên file dịch ngôn ngữ tiếng Anh
  //     },
  //     {
  //       code: "vi",
  //       iso: "vi-VN",
  //       name: "Vietnamese",
  //       file: "vi-VN.json", // Tên file dịch ngôn ngữ tiếng Việt
  //     },
  //   ],
  //   vueI18n: "./i18n.config.ts",
  //   detectBrowserLanguage: {
  //     useCookie: true,
  //     cookieKey: "i18n_redirected",
  //     redirectOn: "all",
  //   },
  // },

  // config folder server
  vite: {
    optimizeDeps: {
      exclude: ["node-rfc"],
    },
  },
  nitro: {
    devProxy: {
      host: "localhost",
    },
  },
});
