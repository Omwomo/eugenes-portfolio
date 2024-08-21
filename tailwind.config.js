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
        },
      },
    },
  },
  plugins: [],
};
