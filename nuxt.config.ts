// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  // SEO và meta
  app: {
    head: {
      // tiêu đề hiển thị
      title: "edu form",
      // phần meta của thẻ head
      meta: [{ name: "description", content: "My amazing site." }],
    },
  },
});
