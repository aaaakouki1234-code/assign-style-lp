import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0C1B33",
          50: "#F3F5F9",
          100: "#E2E7F0",
          200: "#C2CCDD",
          300: "#94A4C2",
          400: "#5E73A0",
          500: "#3A4F7E",
          600: "#1E325C",
          700: "#162546",
          800: "#101B36",
          900: "#0C1B33",
          950: "#07101F",
        },
        gold: {
          DEFAULT: "#C5A572",
          soft: "#EBDFC6",
          deep: "#A6864F",
        },
        paper: "#FBFAF7",
        mist: "#F4F6FA",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "system-ui", "sans-serif"],
        serif: ["var(--font-noto-serif-jp)", "serif"],
      },
      maxWidth: {
        page: "1120px",
        narrow: "680px",
      },
      boxShadow: {
        card: "0 10px 40px -18px rgba(12, 27, 51, 0.25)",
        cta: "0 18px 40px -16px rgba(197, 165, 114, 0.55)",
        float: "0 24px 60px -24px rgba(12, 27, 51, 0.45)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out both",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
