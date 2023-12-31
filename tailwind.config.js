/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
        'custom': ['Poppins', 'sans-serif'],
    },
},
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

