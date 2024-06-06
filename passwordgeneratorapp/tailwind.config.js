/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "400px",
      // => @media (min-width: 474px) { ... }

      md: "650px",
      // => @media (min-width: 65px) { ... }

      lg: "850px",
      // => @media (min-width: 850px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
