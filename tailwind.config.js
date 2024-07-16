/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        code: ["Source Code Pro"],
        zila: ["Zilla Slab"],
        serif: ["Anton SC"],
        lilita: ["Lilita One"],
        concert: ["Concert One"],
        roboto: ["Roboto"],
        abeezee: ["ABeeZee"],
        latin: ["Playwrite PE"]
      },
      zIndex: {
        0: 9999,
      },
    },
  },
  plugins: [],
};
