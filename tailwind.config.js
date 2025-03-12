/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Overpass', 'sans-serif'], // Use Overpass instead of DM Sans
      },
      colors: {
        silver: '#D3D3D3', // Custom silver color
      },
    },
  },
  plugins: [],
};
