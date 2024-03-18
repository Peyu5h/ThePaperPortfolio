/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bleck: "#1C1C19",
        peach: "#C4BCB3",
      },
      fontFamily: {
        carnopee: ["Carnopee Regular", "sans-serif"],
        editorial: ["Editorial Normal", "sans-serif"],
        eBold: ["Editorial Bold", "sans-serif"],
        eLight: ["Editorial Light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
