/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
export default withMT({
   content: [
      './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}'
   ],
   theme: {
      extend: {
         colors: {},
         boxShadow: {
            'outline-yellow': '0 0 20px 6px rgba(255, 255, 0, 0.5)'
         },
         fontFamily: {
            // main font
            roboto: ['Roboto', 'sans-serif'],
            // secondary fonts
            title: ['Archivo Black', 'sans-serif']
         },
         screens: {
            min: '320px',

            cel: '390px',

            ssm: '480px',

            sm: '640px',

            md: '768px',

            lg: '1024px',

            xl: '1280px',

            '2xl': '1536px'
         }
      }
   },
   plugins: [require('tailwindcss-animated')]
});
