/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        makasar: ["Noto Serif Makasar", "serif"],
        open: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
