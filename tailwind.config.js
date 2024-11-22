/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '~/src/*.vue',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
      },
    },
  },
  plugins: [require('tailwindcss-primeui')],
};
