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
      fontSize: {
        xxs: "var(--font-xxs)",
        xs: "var(--font-xs)",
        sm: "var(--font-sm)",
        base: "var(--font-md)",
        lg: "var(--font-lg)",
        xl: "var(--font-xl)",
        "5xl": "var(--font-xxl)",
      },
      colors: {
        skin: {
          brand: "var(--color-brand)",
          brandDark: "var(--color-brand-dark)",
          brandLite: "var(--color-brand-lite)",
          brand2: "var(--color-brand-2)",
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          warning: "var(--color-warning)",
          danger: "var(--color-danger)",
          success: "var(--color-success)",
          info: "var(--color-info)",
          background_1: "var(--background-1)",
          background_2: "var(--background-2)",
          background_3: "var(--background-3)",
          background_4: "var(--background-4)",

          // text colors
          text: "var(--color-text)",
          heading: "var(--color-heading)",
          grey1: "var(--color-grey-1)",
          grey2: "var(--color-grey-2)",
          grey4: "var(--color-grey-4)",
          grey9: "var(--color-grey-9)",
          muted: "var(--color-muted)",
          textBody: "var(--color-body)",

          // Tag Colors
          hot: "var(--color-hot)",
          new: "var(--color-new)",
          sale: "var(--color-sale)",
          best: "var(--color-best)",
        },
      },
      borderColor: {
        border: "var(--border-color)",
        border_2: "var(--border-color-2)",
        border_3: "var(--border-color-3)",
      },
      boxShadow: {
        primary: "var(--box-shadow-1)",
        secondary: "var(--box-shadow-2)",
        tertiary: "var(--box-shadow-3)",
        hover: "var(--box-shadow-3-hover)",
      },
    },
  },
  plugins: [],
};
