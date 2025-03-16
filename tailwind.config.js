/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Overpass', 'sans-serif'], // Custom font
      },
      colors: {
        silver: '#D3D3D3', // Custom silver color
      },
    },
  },
  darkMode: "class", // Ensure dark mode is enabled
  plugins: [],
};
