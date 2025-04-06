/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Updated for App Router
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#1a1a1a',
        lightText: '#d1d5db',
        accentPurple: '#6b21a8',
        accentCyan: '#06b6d4',
      },
    },
  },
  plugins: [],
};
