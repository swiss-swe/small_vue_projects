/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["RotterburgStylishFREE-Regular"],
        steinbeck: ["Steinbeck Gras"]
      }
    }
  },
  plugins: []
};
