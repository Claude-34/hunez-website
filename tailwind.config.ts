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
        "logo-glow": "0 0 35px rgba(45, 106, 79, 0.35)",
      },
      keyframes: {
        logoFloat: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg) scale(1)" },
          "50%": { transform: "translateY(-4px) rotate(0.5deg) scale(1.02)" },
        },
        logoGlow: {
          "0%, 100%": { opacity: "0.35", transform: "scale(0.95)" },
          "50%": { opacity: "0.8", transform: "scale(1.15)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
      },
      animation: {
        "logo-float": "logoFloat 5s ease-in-out infinite",
        "logo-glow": "logoGlow 3.5s ease-in-out infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
