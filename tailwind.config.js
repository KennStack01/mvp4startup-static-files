module.exports = {
  mode: "jit",
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Gontserrat",
          "Montserrat",
          "Roboto",
          "bitter",
          "Momcake",
          "Open Sans",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        "dark-pink": "#820552",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
