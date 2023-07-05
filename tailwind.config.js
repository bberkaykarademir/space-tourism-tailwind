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
      keyframes: {
        rotate: {
          '0%': { backgroundPositionX: 0, backgroundPositionY: 0 },
          '100%': { backgroundPositionX: -1200, backgroundPositionY: 0 },
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-3d'),
  ],
};
