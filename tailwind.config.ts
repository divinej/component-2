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
        'dark-blue': '#0A0C1C',
        blue: '#1B1937',
        purple: '#AB5CDB',
        white: '#ffffff',
        gray: 'rgba(255, 255, 255, .75)',
      },
      fontFamily: {
        'sub-heading': ['Lexend Deca', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      fontSize: {
        'base': '0.9375',
      },
      borderRadius: {
        'xl': "0.625rem"
      },
      maxWidth: {
        'xl': "69.375rem"
      },
      padding: {
        20: "4.5rem",
      }
    },
  },
  plugins: [],
};
export default config;
