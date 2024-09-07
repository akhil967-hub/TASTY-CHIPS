/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          'light-golden': '#FAFAD2',
          ivory: '#FFFFF0',
        },
        // backgroundImage: {
        //   // 'custom-bg': "url('/public/images/img.jpg')", 
        //   // 'custom-bg': "url('/public/images/bg3.jpg')", 
        // },
      },
    },
    plugins: [],
  };
  