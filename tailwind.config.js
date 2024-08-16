/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '7/10': '70%',
        '3/10': '30%',
        '38px': '38px',
      },
      colors: {
        customPink: '#f4c7de',
        loaderBlue: '#3498db',
      },
      animation: {
        'spin-custom': 'spin 1s ease-in-out infinite',
      },
      keyframes: {
        spin: {
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      spacing: {
        '19px': '19px',
      },
      zIndex: {
        '1': '1',
      },
      inset: {
        '70px': '70px',
        '10px': '10px',
      },
      lineHeight: {
        '22px': '22px',
      },
    },
  },
  plugins: [],
}