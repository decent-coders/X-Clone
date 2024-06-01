export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    // "@nuxtjs/supabase" // Uncomment if you want to use this module
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
    "~/assets/css/tailwind.css", // Include global CSS file
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
