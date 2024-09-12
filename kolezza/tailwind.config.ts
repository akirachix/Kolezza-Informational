import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'light-sky-blue': '#A5DAF7', 
        customDarkBlue: '#052049',
      },
      fontFamily: {
        nunito: ['Nunito'],
        nunitoBold: []
      },
    },
  },
  plugins: [],
};
export default config;
