/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          100: '#292f36',
          200: '#43454d',
          300: '#1a1e23',
          400: '#24fc89',
          500: '#000000',
        },
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        appear: 'appear 5s forwards',
        disappear: 'disappear 5s forwards',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
