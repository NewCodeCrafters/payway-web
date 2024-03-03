/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#0e1116",
          100: "#030304",
          200: "#060709",
          300: "#080a0d",
          400: "#0b0d11",
          500: "#0e1116",
          600: "#333d50",
          700: "#586a8a",
          800: "#8b9bb5",
          900: "#c5cdda",
        },
        primary: {
          DEFAULT: "#1c1cee",
          100: "#040431",
          200: "#070763",
          300: "#0b0b94",
          400: "#0f0fc5",
          500: "#1c1cee",
          600: "#4949f1",
          700: "#7676f5",
          800: "#a4a4f8",
          900: "#d1d1fc",
        },
        secondary: {
          DEFAULT: "#fa7921",
          100: "#371701",
          200: "#6e2d02",
          300: "#a54403",
          400: "#dc5b04",
          500: "#fa7921",
          600: "#fb924b",
          700: "#fcad78",
          800: "#fdc8a5",
          900: "#fee4d2",
        },
      },
    },
  },
  plugins: [],
};
