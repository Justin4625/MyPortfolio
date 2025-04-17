/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out",
        bounce: "bounce 1s infinite",
        pulse: "pulse 1.5s infinite",
        glow: "glow 2s infinite alternate",

      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(-5%)" },
          "50%": { transform: "translateY(0)" },
        },
        pulse: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 25px rgba(147, 112, 219, 0.8)" },
          "100%": { boxShadow: "0 0 50px rgba(147, 112, 219, 1)" },
        },
      },
    },
  },
  plugins: [],
};