/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PoorStory: ["Poor Story", "cursive"],
      },
      colors: {
        bgFirst: "hsl(214, 47%, 23%)",
        bgSecond: "hsl(237, 49%, 15%)",
        headerOutline: "hsl(217, 16%, 45%)",
        scoreText: "hsl(229, 64%, 46%)",
        scoreText2: "hsl(229, 25%, 31%)",
        scissorsRing: "hsl(40, 84%, 53%)",
        paperRing: "hsl(230, 89%, 65%)",
        rockRing: "hsl(349, 70%, 56%)",
      },
    },
  },
  plugins: [],
};
