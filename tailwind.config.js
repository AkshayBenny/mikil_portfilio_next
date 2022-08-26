/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#120055',
        'light-blue': '#613EE2',
        'light-gray': 'rgba(18, 0, 85, 0.24)',
        'btn-dark-blue-bg': '#453091',
        'btn-grey-bg': 'rgba(18, 17, 39, 0.04)',
      },
    },
  },
  plugins: [],
}
