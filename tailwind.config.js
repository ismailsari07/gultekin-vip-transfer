/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light theme · krem zemin · Akdeniz turkuazı aksan
        bg: "#FCFBF7",
        "bg-alt": "#F0F4F4",
        surface: "#FFFFFF",
        ink: "#16293A",
        "ink-soft": "#3C4F5E",
        muted: "#65757F",
        accent: {
          DEFAULT: "#0E9FB3",
          deep: "#0A7C8C",
          tint: "#E2F3F4",
        },
        navy: {
          DEFAULT: "#102536",
          2: "#0B1B29",
        },
        wa: {
          DEFAULT: "#25D366",
          deep: "#1EB257",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        DEFAULT: "18px",
        sm: "12px",
        lg: "28px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(16,37,54,.04), 0 4px 14px rgba(16,37,54,.05)",
        md: "0 8px 30px rgba(16,37,54,.08), 0 2px 6px rgba(16,37,54,.04)",
        lg: "0 24px 60px rgba(16,37,54,.14)",
      },
      maxWidth: {
        wrap: "1200px",
      },
    },
  },
  plugins: [],
};
