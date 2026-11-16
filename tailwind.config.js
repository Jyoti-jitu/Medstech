/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#20B2AA",
          darkred: "#178F89",
          charcoal: "#20242B",
          darker: "#171A20",
          lightgrey: "#F5F6F8",
          softred: "#E8F8F7",
          border: "#E2E5EB",
          muted: "#6B7280",
          teal: "#20B2AA",
          darkteal: "#178F89",
          softteal: "#E8F8F7",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(32, 36, 43, 0.06), 0 2px 6px -1px rgba(32, 36, 43, 0.04)",
        "card-hover": "0 14px 34px -4px rgba(32, 178, 170, 0.18), 0 8px 16px -2px rgba(32, 36, 43, 0.08)",
        "glow-red": "0 0 25px -3px rgba(32, 178, 170, 0.35)",
        "glow-teal": "0 0 25px -3px rgba(32, 178, 170, 0.35)",
        header: "0 2px 15px rgba(32, 36, 43, 0.04)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        heartbeat: "heartbeat 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.08)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
