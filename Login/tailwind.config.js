/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "additional-white": "#fff",
        "primary-600-base": "#2563eb",
        "greyscale-900": "#0f172a",
        "greyscale-200": "#e2e8f0",
        "greyscale-500": "#64748b",
        gray: "#141416",
        "greyscale-50": "#f8fafc",
        "greyscale-400": "#94a3b8",
      },
      spacing: {},
      fontFamily: {
        "body-small-regular": "Inter",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      "5xl": "24px",
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
