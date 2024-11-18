import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "griffy": "var(--font-griffy)",
        "quicksand":"var(--font-quicksand)"
      },
      colors: {
        orange:"#CD5804",
        blue:"#1C4C7B",
        white:"#F3F3F3",
        gray:"#CACACA"
      },
      backgroundImage:{
        'include_bg':"url('/images/include_bg.png')",
        'footer_bg':"url('/images/footer_bg.png')",
      },
      fontSize:{
        "title":"4rem",
        "sm_title":"3rem"
      }
    },
  },
  plugins: [],
};
export default config;
