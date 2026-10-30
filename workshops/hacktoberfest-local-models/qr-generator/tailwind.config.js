/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.css",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}