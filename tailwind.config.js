/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideIn: 'slideIn 1s ease-out forwards',
      },
      colors: {
        darkBlue: 'rgb(14, 27, 66)',
        softRed: 'rgb(247, 124, 95)',
        deepPurple: 'rgb(94, 55, 104)',
        mutedPink: 'rgb(182, 81, 106)',
        darkPurple: 'rgb(55, 40, 95)',
      },
    },
  },
  plugins: [],
}