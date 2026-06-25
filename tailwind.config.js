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
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      },
      animation: {
        slideIn: 'slideIn 1s ease-out forwards',
        shimmer: 'shimmer 3s infinite',
        float: 'float 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      colors: {
        // Premium Indian Heritage Color Palette
        'royal-gold': '#C9A227',
        'royal-gold-light': '#E8D48B',
        'royal-gold-dark': '#8B6914',
        'deep-maroon': '#800020',
        'deep-maroon-light': '#A52A4A',
        'imperial-blue': '#0A1628',
        'imperial-blue-light': '#1A2D4A',
        'cream-ivory': '#FFFDD0',
        'saffron': '#FF9933',
        'emerald': '#046307',
        'ruby-red': '#E0115F',
        'peacock-blue': '#006994',
        'sandstone': '#C2B280',
        // Original colors for reference
        darkBlue: 'rgb(14, 27, 66)',
        softRed: 'rgb(247, 124, 95)',
        deepPurple: 'rgb(94, 55, 104)',
        mutedPink: 'rgb(182, 81, 106)',
        darkPurple: 'rgb(55, 40, 95)',
      },
      backgroundImage: {
        'gradient-royal': 'linear-gradient(135deg, #0A1628 0%, #1A2D4A 50%, #800020 100%)',
        'gradient-gold': 'linear-gradient(135deg, #C9A227 0%, #E8D48B 50%, #C9A227 100%)',
        'gradient-premium': 'linear-gradient(180deg, rgba(10,22,40,0.95) 0%, rgba(128,0,32,0.85) 100%)',
        'mandala-pattern': "url('data:image/svg+xml,%3Csvg width=\"120\" height=\"120\" viewBox=\"0 0 120 120\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23C9A227\" fill-opacity=\"0.25\"%3E%3Cpath d=\"M60 10c2.2 0 4 1.8 4 4v8c0 2.2-1.8 4-4 4s-4-1.8-4-4v-8c0-2.2 1.8-4 4-4zm0 84c2.2 0 4 1.8 4 4v8c0 2.2-1.8 4-4 4s-4-1.8-4-4v-8c0-2.2 1.8-4 4-4zm42-42c0 2.2-1.8 4-4 4h-8c-2.2 0-4-1.8-4-4s1.8-4 4-4h8c2.2 0 4 1.8 4 4zM30 60c0 2.2-1.8 4-4 4H18c-2.2 0-4-1.8-4-4s1.8-4 4-4h8c2.2 0 4 1.8 4 4zm59.4-25.4c1.6 1.6 1.6 4.1 0 5.7l-5.7 5.7c-1.6 1.6-4.1 1.6-5.7 0-1.6-1.6-1.6-4.1 0-5.7l5.7-5.7c1.6-1.6 4.1-1.6 5.7 0zM36.3 89.4c1.6 1.6 1.6 4.1 0 5.7l-5.7 5.7c-1.6 1.6-4.1 1.6-5.7 0-1.6-1.6-1.6-4.1 0-5.7l5.7-5.7c1.6-1.6 4.1-1.6 5.7 0zm0-58.8c1.6-1.6 4.1-1.6 5.7 0l5.7 5.7c1.6 1.6 1.6 4.1 0 5.7-1.6 1.6-4.1 1.6-5.7 0l-5.7-5.7c-1.6-1.6-1.6-4.1 0-5.7zm58.8 58.8c1.6-1.6 4.1-1.6 5.7 0l5.7 5.7c1.6 1.6 1.6 4.1 0 5.7-1.6 1.6-4.1 1.6-5.7 0l-5.7-5.7c-1.6-1.6-1.6-4.1 0-5.7zM60 25c19.3 0 35 15.7 35 35s-15.7 35-35 35-35-15.7-35-35 15.7-35 35-35zm0 60c13.8 0 25-11.2 25-25s-11.2-25-25-25-25 11.2-25 25 11.2 25 25 25z\"/%3E%3Cpath d=\"M60 35c13.8 0 25 11.2 25 25s-11.2 25-25 25-25-11.2-25-25 11.2-25 25-25zm0 40c8.3 0 15-6.7 15-15s-6.7-15-15-15-15 6.7-15 15 6.7 15 15 15z\" fill-opacity=\"0.15\"/%3E%3Cpath d=\"M60 45c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15zm0 20c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5z\" fill-opacity=\"0.1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        'paisley-pattern': "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23C9A227\" fill-opacity=\"0.30\"%3E%3Cpath d=\"M50 20c-16.6 0-30 13.4-30 30s13.4 30 30 30 30-13.4 30-30-13.4-30-30-30zm0 50c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        'geometric-pattern': "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23C9A227\" fill-opacity=\"0.30\"%3E%3Cpath d=\"M0 40L40 0H20L0 20M40 40V20L20 40\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'cinzel': ['Cinzel', 'serif'],
        'lato': ['Lato', 'sans-serif'],
        'comfortaa': ['Comfortaa', 'cursive'],
      },
      boxShadow: {
        'royal': '0 10px 40px rgba(201, 162, 39, 0.3)',
        'premium': '0 20px 60px rgba(10, 22, 40, 0.4)',
        'glow': '0 0 20px rgba(201, 162, 39, 0.5)',
      },
    },
  },
  plugins: [],
}