const { teal } = require("tailwindcss/colors")

module.exports = {
  darkMode: "class",
  purge: {
    content: ["./components/**/*.vue", "./content/**/*.md"],
  },
  theme: {
    extend: {
      colors: {
        social: {
          twitter: "#1DA1F2",
          telegram: "#2EAADE",
          whatsapp: "#25D366",
          discord: {
            light: "#7289DA",
            dark: "#6c82cf",
          },
        },
        teal,
      },
      screens: {
        "2xl": false,
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ["dark"],
      translate: ["group-hover"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
