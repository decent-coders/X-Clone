import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [],
  theme: {
    screens: {
      xsm: "350px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      mx: "1920px",
    },
    extend: {},
  },
  plugins: [],
};
