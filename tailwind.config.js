module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        nest: "#FFFEFC",
      },
    },
  },
  plugins: [],
};
