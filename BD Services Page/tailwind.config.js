/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-600-base": "#2563eb",
        "additional-white": "#fff",
        gray: "#141416",
        "greyscale-50": "#f8fafc",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "heading-h6": "Inter",
        poppins: "Poppins",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      "5xl": "24px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
