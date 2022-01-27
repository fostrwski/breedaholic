module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/common/components/**/*.{js,ts,jsx,tsx}",
    "./src/common/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("@tailwindcss/forms")],
};
