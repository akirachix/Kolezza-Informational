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
        nunito: ['Nunito Regular 400 at 48px'], 
      },
      screens: {
        'is': {'min': '375px', 'max': '539px'},
        'sd': {'min': '540px', 'max': '767px'},
        'im': {'min': '768px', 'max': '999px'},
        'nh': {'min': '1000px', 'max': '1279px'},
        'nhm':{'min': '1280px'},
      },
      colors: {
        customBlue: '#A5DAF7', 
        customDarkBlue: '#052049',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

    },
  },
  plugins: [],
};

export default config;
