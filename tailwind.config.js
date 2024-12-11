/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {

        'sx': {'min': '318px', 'max': '576.99px'},
        'xs': {'min': '318px', 'max': '768.99px'},
        'sm': {'min': '769px', 'max': '1024.99px'}, 
        'md': {'min': '1025px', 'max': '1280.99px'},
        'lg': {'min': '1281px', 'max': '1438.99px'}, 
        'xl': {'min': '1439.99px'}, 
       
      },
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        publicSans: ['"Public Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}