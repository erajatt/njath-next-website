/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat: ['Montserrat, sans-serif'],
      },
      fontWeight:{
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
      },
      colors:{
        njathbg: '#111A23',
        njathgold: '#FDCC06'
      }
    },
  },
  plugins: [],
}