import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        // Standardise all radii to 16 px (rounded-2xl baseline)
        // rounded-full and rounded-3xl intentionally left at defaults
        'sm':  '0.5rem',   // 8px  – tiny accents
        'DEFAULT': '1rem', // 16px – base `rounded`
        'md':  '1rem',     // 16px – was 6px
        'lg':  '1rem',     // 16px – was 8px
        'xl':  '1rem',     // 16px – was 12px
        '2xl': '1rem',     // 16px – unchanged
        '3xl': '1.5rem',   // 24px – large hero cards / modals, unchanged
      },
      colors: {
        ghana: {
          red: "#CE1126",
          gold: "#FCD116",
          green: "#006B3F",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        epilogue: ["var(--font-epilogue)"],
        jakarta: ["var(--font-jakarta)"],
      },
    },
  },
  plugins: [],
};
export default config;
