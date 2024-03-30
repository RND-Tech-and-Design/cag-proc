/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./public/**/*.{html,js,ts,jsx,tsx}",
    "./**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#006b59",
        secondary: {
          100: "#978ca4",
          200: "#cbc6d2",
        },
        accent: "#d5b5fd",
        warn: "#f44336",
        highlight: "#00f1aa",
      },
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
