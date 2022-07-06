const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/common/components/**/*.{js,ts,jsx,tsx}",
    "./src/common/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        breedCardImageLoading: {
          "50%": {
            opacity: "0.90"
          }
        }
      },
      animation: {
        breedCardImageLoading: "breedCardImageLoading 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      }
    },
  },
};
