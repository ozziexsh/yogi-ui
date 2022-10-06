/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(.*)-(100|200|500|600|700)$/,
      variants: ['hover']
    },
    {
      pattern: /border-(.*)-(700)$/,
    },
    {
      pattern: /text-(.*)-(700)$/,
      variants: ['hover']
    },
  ]
}
