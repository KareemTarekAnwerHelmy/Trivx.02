import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0066FF",
          dark: "#0052CC",
          light: "#3399FF",
        },
        neon: {
          blue: "#00D9FF",
          cyan: "#00FFFF",
          purple: "#8B5CF6",
        },
        dark: {
          DEFAULT: "#0A0E27",
          light: "#1A1F3A",
        },
      },
      animation: {
        "glow": "glow 2s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px #00D9FF, 0 0 10px #00D9FF, 0 0 15px #00D9FF" },
          "100%": { boxShadow: "0 0 10px #00D9FF, 0 0 20px #00D9FF, 0 0 30px #00D9FF" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
