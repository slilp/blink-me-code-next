module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
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
  plugins: [require("@tailwindcss/typography")],
};
