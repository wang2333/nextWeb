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
      fontSize: {
        base: ["1rem", "1rem"],
        lg: ["1.25rem", "1.25rem"],
      },
      height: {
        130: "32.5rem",
      },
      colors: {
        primary: "var(--primary)",
        nornam: "var(--normal)",
        gray: "var(--gray)",
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
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
