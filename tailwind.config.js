/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        samajwadi: {
          red: "#DA251D",
          green: "#00914C",
          dark: "#051a10",
        },
      },
    },
  },
  plugins: [],
}
