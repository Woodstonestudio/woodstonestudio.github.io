import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#100F0C", // warm black
        surface: "#1A1814",
        bone: {
          DEFAULT: "#EFEAE0", // warm white
          dim: "#CFC9BC",
        },
        gray: {
          warm: "#8A8478", // warm neutral gray
        },
        line: "rgba(239,234,224,0.10)",
        "line-soft": "rgba(239,234,224,0.06)",
        // Product accent — reserved exclusively for Contractory UI surfaces
        contractory: {
          DEFAULT: "#8B7CF6",
          soft: "#A99BF8",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.035em",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(340%)" },
        },
      },
      animation: {
        "pulse-soft": "pulseSoft 2.6s ease-in-out infinite",
        scan: "scan 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
