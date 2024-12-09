/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '18': '4.5rem'
      },
      maxWidth: {
        '400': '400px'
      },
      fontFamily: {
        'poppins': 'Poppins, sans-serif'
      }

    },
  },
  plugins: [],
}

