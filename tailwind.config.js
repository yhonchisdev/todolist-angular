/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        global: "JosefinSans",
      },
      boxShadow: {
        content: "0 35px 50px -15px rgba(194,195,214, .5)",
        contentDark: "0 35px 50px -15px rgba(0,0,0, .5)",
      },
      colors: {
        eerieBlack: "#171823",
        yankeesBlue: "#25273D",
      },
    },
  },
  plugins: [],
};
