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
          bg: "#F8F8F8",
        },
        offwhite: "#F5F5F5",
        accent: {
          DEFAULT: "#E8FF00",
          muted: "#C8DC00",
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
