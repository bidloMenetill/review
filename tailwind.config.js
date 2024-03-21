/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
        1081: '1081px',
        653: '653px',
      },
      maxHeight: {
        974: '974px',
        314: '314px',
        122: '122px',
        1800: '1800px',
      },
      fontSize: { 122: '122px' },
      maxWidth: {
        1920: '1920px',
        1719: '1719px',
        938: '938px',
        170: '170px',
      },
      width: {
        1719: '1719px',
        938: '938px',
        1920: '1920px',
        170: '170px',
        377: '377px',
        1025: '1025px',
      },
      gap: { 76: '76px' },
      colors: {
        '#F5F5F5': '#F5F5F5',
        '#DC6441': '#DC6441',
        '#161616': '#161616',
      },
      lineHeight: {
        61: '61px',
        122: '122px',
      },
    },
  },
  plugins: [],
};
