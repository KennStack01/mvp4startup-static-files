module.exports = {
  mode: "jit",
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dpink: "#820552",
        brand: "#820552",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
