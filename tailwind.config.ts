// tailwind.config.ts
import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    "./pages/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.ts",
  ],
  theme: {
    screens: {
      m300: "300px",
      m400: "400px",
      m500: "500px",
      m600: "600px",
      m700: "700px",
      m800: "800px",
      m900: "900px",
      m1000: "1000px",
      m1100: "1100px",
      m1200: "1200px",
      m1300: "1300px",
      m1400: "1400px",
      m1500: "1500px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      mxx: "1920px",
    },
    extend: {
      fontFamily: {
        system: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  // plugins: [],
};
