export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    // "@nuxtjs/supabase",
    "@nuxtjs/google-fonts",
    "@nuxt/ui",
  ],

  googleFonts: {
    families: {
      Roboto: true,
      "Helvetica+Neue": true,
      "Segoe+UI": true,
      "San+Francisco": true,
      Arial: true,
    },
  },

  css: [
    "~/assets/css/tailwind.css",
    // "emoji-picker-element/theme-light.css" // Removed as previously instructed
  ],

  app: {
    head: {
      title: "Twitter",
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css",
        },
      ],
    },
  },

  devtools: {
    enabled: true,
  },
});
