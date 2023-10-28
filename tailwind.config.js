/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "heading-xl": "64px",
        "heading-l": "48px",
        "heading-m": "24px",
        "heading-s": "20px",
      },
      fontWeight: {
        regular: 400,
        semibold: 600,
      },
      lineHeight: {
        heading: "110%",
        body: "150%",
      },
      colors: {
        blue: "#345FF6",
        gunmetal: "#253347",
        "dark-electric-blue": "#5E6E85",
        borders: "#D8E2E7",
        "pure-white": "#FFFFFF",
      },
      backgroundImage: {
        "color-fondo":
          "linear-gradient(rgba(240, 245, 250, 1), rgba(214, 230, 245, 1))",
        "color-bg-blue": "linear-gradient(90deg, #345FF6 0%, #587DFF 100%)",
      },
      width: {
        72: "18rem",
        grande: "36rem",
      },
      height: {
        grande: "40rem",
      },
    },
  },
  plugins: [],
};
