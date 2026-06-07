import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: "#020403",
          panel: "#06110b",
          line: "#1d6f3a",
          glow: "#37ff78",
          text: "#c9ffd8",
          dim: "#78b88e",
          muted: "#4d7f5d"
        }
      },
      fontFamily: {
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace"
        ]
      },
      boxShadow: {
        terminal: "0 0 30px rgba(55, 255, 120, 0.08)",
        "terminal-hover": "0 0 36px rgba(55, 255, 120, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
