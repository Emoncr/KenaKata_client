/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["var(--font-quicksand)"],
        lato: ["var(--font-lato)"],
      },
      colors: {
        skin: {
          brand: "var(--color-brand)",
          brandDark: "var(--color-brand-dark)",
          brand2: "var(--color-brand-2)",
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          warning: "var(--color-warning)",
          danger: "var(--color-danger)",
          success: "var(--color-success)",
          info: "var(--color-info)",
        },
      },
      textColor: {
        skin: {
          text: "var(--color-text)",
          heading: "var(--color-heading)",
          grey1: "var(--color-grey-1)",
          grey2: "var(--color-grey-2)",
          grey4: "var(--color-grey-4)",
          grey9: "var(--color-grey-9)",
          muted: "var(--color-muted)",
          textBody: "var(--color-text-body)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
