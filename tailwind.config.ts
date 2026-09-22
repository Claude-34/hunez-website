import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#1B4332",
          light: "#2D6A4F",
        },
        olive: {
          DEFAULT: "#606C38",
          light: "#A3B18A",
        },
        offwhite: "#FAFAF8",
        charcoal: "#2D2D2D",
        warm: {
          DEFAULT: "#BC6C25",
          light: "#DDA15E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-jakarta)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        executive: "0 20px 50px rgba(27, 67, 50, 0.08)",
        glow: "0 0 25px rgba(45, 106, 79, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
