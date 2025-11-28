/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/demo-content/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        swissRed: '#FF3B30',
        offBlack: '#111111',
        paperWhite: '#F4F4F4',
        'neu-base': '#e0e5ec',
        'neu-shadow-light': '#ffffff',
        'neu-shadow-dark': '#a3b1c6',
        'clay-base': '#f0f4f8',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        blob: {
            '0%': { transform: 'translate(0px, 0px) scale(1)' },
            '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
            '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
            '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        scanline: {
            '0%': { transform: 'translateY(-100%)' },
            '100%': { transform: 'translateY(100%)' }
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
