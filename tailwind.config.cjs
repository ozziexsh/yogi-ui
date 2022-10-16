/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
  safelist: [
    {
      pattern: /bg-(.*)-(100|200|500|600|700)$/,
      variants: ['hover']
    },
    {
      pattern: /border-(.*)-(700)$/,
    },
    {
      pattern: /text-(.*)-(600|700)$/,
      variants: ['hover']
    },
  ]
}
