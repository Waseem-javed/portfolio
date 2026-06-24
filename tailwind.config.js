/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin-slow 9s linear infinite',
        'pulse-wave': 'pulse-wave 2.5s ease-in-out infinite',
      },
      keyframes: {
        'spin-slow': {
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-wave': {
          '0%, 100%': { transform: 'scale(0.95)', opacity: '0.6' },
          '50%': { transform: 'scale(1.05)', opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
}

