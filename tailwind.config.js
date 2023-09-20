/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile1: { max: '440px' },
        display1: { max: '630px' },
        display2: { max: '1172px' },
        display3: { min: '1080px' },
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        title: ['Black Han Sans', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0px 0px 30px rgba(0, 0, 0, 0.12)',
      },
      colors: {
        color1: '#3e46ad',
        color2: '#515be8',
        color3: '#121212',
        color4: '#28282fdd',
        color5: '#17171d',
      },
    },
  },
  plugins: [],
}

