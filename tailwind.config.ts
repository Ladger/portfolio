import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: { DEFAULT: "#5a1a2e", light: "#7d3a4d" },
        paper: { DEFAULT: "#f7f3ee", tint: "#efe6e2" },
        ink: { DEFAULT: "#1d232b", soft: "#3d4550", muted: "#5b6471" },
        rule: "#d9d2c9",
      },
      fontFamily: {
        sans: ["var(--font-barlow)", "Arial", "sans-serif"],
        display: ["var(--font-condensed)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
