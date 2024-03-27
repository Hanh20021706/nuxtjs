// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  // SEO và meta
  app: {
    head: {
      // tiêu đề hiển thị
      title: "edu form",
      // phần meta của thẻ head
      meta: [{ name: "description", content: "My amazing site." }],
    },
  },

  // i18n
  i18n: {
    // Module Options
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en-US.json", // Tên file dịch ngôn ngữ tiếng Anh
      },
      {
        code: "vi",
        iso: "vi-VN",
        name: "Vietnamese",
        file: "vi-VN.json", // Tên file dịch ngôn ngữ tiếng Việt
      },
    ],
  },
});
