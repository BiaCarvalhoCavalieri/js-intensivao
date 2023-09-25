/** @type {import('tailwindcss').Config} **/
export default {
  content: ["./src/**/*.{html,js}", "./*{html,js}"],
  theme: {
    extend: {},
    screens: {
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
    }
  },
  plugins: [],
}

