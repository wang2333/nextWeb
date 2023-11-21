/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      padding: "0",
      center: true,
      screens: {
        "2xl": "1568px",
      },
    },
    extend: {
      maxWidth: {
        "10xl": "1920px",
      },
      fontSize: {
        xs: ["0.75rem", "1.25rem"],
        base: ["1rem", "1.5rem"],
        lg: ["1.25rem", "1.75rem"],
        xl: ["1.5rem", "2rem"],
      },
      boxShadow: {
        base: "box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
      },
      height: {
        130: "32.5rem",
      },
      colors: {
        primary: "var(--primary)",
        nornam: "var(--normal)",
        gray: "var(--gray)",
      },
      backgroundColor: {
        primary: "var(--primary)",
        nornam: "var(--normal)",
        gray: "var(--gray)",
        black1: "var(--black)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
