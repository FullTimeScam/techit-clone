/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Techit_orange: "rgb(255,119,17)",
      },
    },
    fontFamily: {
      pretendard: ["Pretendard"],
    },
  },
  plugins: [],
};
