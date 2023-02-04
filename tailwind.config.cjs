/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "PoorStory" : ['Poor Story', 'cursive'],
      }
    },
    screens: {
      "mobile": '375px',
      "desktop": '1366px'
    }
  },
  plugins: [],
}
