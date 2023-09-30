/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      lightGray: "#EEEEEE",
      green:"#25DFAC",
      primary:"#FB2A63",
      black900:"#272727",
      lightBlack:"#5E5E5E",
      white:"#FFFFFF",
      black:'black'

    },
    extend: {
      
    },
  },
  plugins: [],
}
