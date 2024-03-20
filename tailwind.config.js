/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '1300px',
        xl: '1720px',
      },
      fontFamily: { montserrat: ['Montserrat'] },
      backgroundImage: {
        'about-us': "url('/src/shared/img/about.png')",
        rectangle: "url('/src/shared/img/rectangle_61.png')",
        'why-q-rush': "url('/src/shared/img/Why-Q-Rush.png')",
        aboutUs: "url('src/shared/img/aboutUs.png)",
      },
      height: {
        974: '974px',
        314: '314px',
        122: '122px',
        802: '802px',
        2800: '2800px',
      },
      maxHeight: {
        974: '974px',
        314: '314px',
        122: '122px',
      },
      fontSize: { 122: '122px' },
      maxWidth: {
        1920: '1920px',
        1719: '1719px',
        938: '938px',
      },
      width: {
        1719: '1719px',
        938: '938px',
        1920: '1920px',
      },
      gap: { 76: '76px' },
      colors: {
        '#F5F5F5': '#F5F5F5',
        '#DC6441': '#DC6441',
      },
      lineHeight: {
        61: '61px',
        122: '122px',
      },
    },
  },
  plugins: [],
};
