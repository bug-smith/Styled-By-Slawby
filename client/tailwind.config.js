/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Koho: ["KoHo", "sans-serif"],
        Aleg: ["Alegreya", "sans-serif"],
      },
    },
  },
  plugins: [],
};
