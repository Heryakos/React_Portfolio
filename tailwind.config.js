/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--bg-primary) / <alpha-value>)",
        secondary: "rgb(var(--text-secondary) / <alpha-value>)",
        tertiary: "rgb(var(--bg-tertiary) / <alpha-value>)",
        "black-100": "rgb(var(--bg-black-100) / <alpha-value>)",
        "black-200": "rgb(var(--bg-black-200) / <alpha-value>)",
        "white-100": "rgb(var(--bg-white-100) / <alpha-value>)",
        "electric-blue": "#2563EB",
      },
      boxShadow: {
        card: "0px 20px 40px -15px rgba(0,0,0,0.8)",
        glow: "0 0 20px rgba(37, 99, 235, 0.4)",
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};