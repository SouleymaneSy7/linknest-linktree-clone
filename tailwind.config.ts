import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
    colors: {
      "primary-clr": "var(--primary-clr)",
      "background-clr": "var(--background-clr)",
      "secondary-bg-clr": "var(--secondary-bg-clr)",
      "text-clr": "var(--text-clr)",
      "paragraph-text-clr": "var(--paragraph-text-clr)",
    },
    fontSize: {
      "fs-sm": "var(--fs-16-18)",
      "fs-lg": "var(--fs-18-20)",
      "fs-xlg": "var(--fs-32-36)",
    },
    fontWeight: {
      "fw-regular": "var(--fw-regular)",
      "fw-bold": "var(--fw-bold)",
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
