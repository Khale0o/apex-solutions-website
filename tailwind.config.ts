import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        apex: {
          night: "#050816",
          blue: "#0047FF",
          cyan: "#00BFFF",
          panel: "rgba(255,255,255,0.06)",
          stroke: "rgba(255,255,255,0.14)",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(0, 191, 255, 0.35)",
        "blue-glow": "0 0 60px rgba(0, 71, 255, 0.32)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at center, rgba(0,191,255,0.22) 0, transparent 34%), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        pulseArrow: {
          "0%, 100%": { opacity: "0.45", transform: "translateX(0)" },
          "50%": { opacity: "1", transform: "translateX(8px)" },
        },
        pulseDown: {
          "0%, 100%": { opacity: "0.55", transform: "translateY(-2px)" },
          "50%": { opacity: "1", transform: "translateY(4px)" },
        },
      },
      animation: {
        "pulse-arrow": "pulseArrow 2s ease-in-out infinite",
        "pulse-down": "pulseDown 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
