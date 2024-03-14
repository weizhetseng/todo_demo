/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '20px'
      },
      colors: {
        main: '#FFD370',
        red1: '#D87355',
        black1: '#333333',
        gray1: '#9F9A91',
        gray2: '#E5E5E5'
      },
      backgroundImage: {
        main2:
          'linear-gradient(172.7deg, #FFD370 5.12%, #FFD370 53.33%, #FFD370 53.44%, #FFFFFF 53.45%, #FFFFFF 94.32%)'
      },
      boxShadow: {
        shadow_main: '0px 0px 15px 0px rgba(0,0,0,0.15)'
      }
    }
  },
  plugins: []
}
