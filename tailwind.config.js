/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [

    function ({ addVariant, e }) {
      addVariant('focus', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`focus${separator}${className}`)}:focus`;
        });
      });
      addVariant('valid', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`valid${separator}${className}`)}:valid`;
        });
      });
    },

  ],
}

