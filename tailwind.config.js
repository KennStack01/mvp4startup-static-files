module.exports = {
  mode: "jit",
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        "dark-pink": "#820552",
        brand: "#4DF69B",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
