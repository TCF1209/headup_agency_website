import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#1A1A1A",
          surface: "#242424",
          border: "#333333",
        },
        light: {
          bg: "#FAFAF7",
          surface: "#FFFFFF",
          border: "#E8E3DB",
          muted: "#7A7268",
        },
        body: "#2D2A26",
        offwhite: "#F5F5F5",
        accent: {
          DEFAULT: "#A8562C",
          muted: "#8B4520",
        },
        muted: "#888888",
      },
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
        cjk: ["var(--font-noto-sc)", "var(--font-dm-sans)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
