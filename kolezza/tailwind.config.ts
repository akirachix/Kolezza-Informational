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
        'custom-blue': '#052049',
        customBlue: '#A5DAF7', 
        customRed: '#DA1111',
        customGreen:'#90BD31',
        customDarkBlue: '#052049'
      },
      fontFamily: {
        nunito: ['Nunito Regular 400 at 48px'],
        nunitoBold: []
     , 

      },
      screens: {
        'is': {'min': '375px', 'max': '539px'},
        'sd': {'min': '540px', 'max': '767px'},
        'im': {'min': '768px', 'max': '999px'},
        'nh': {'min': '1000px', 'max': '1279px'},
        'nhm':{'min': '1280px'},
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
