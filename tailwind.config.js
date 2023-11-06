/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["var(--font-barlow)"],
        fraunces: ["var(--font-fraunces)"],
      },
      colors: {
        // primary color
        "soft-red": "hsl(7, 99%, 70%)",
        Yellow: "hsl(51, 100%, 49%)",
        "Dark-desaturated-cyan": "hsl(167, 40%, 24%)",
        "Dark-blue": "hsl(198, 62%, 26%)",
        "Dark-moderate": "hsl(168, 34%, 41%)",
        // neutral color
        "Very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
        "Very-dark-grayish-blue": "hsl(213, 9%, 39%)",
        "Dark-grayish-blue": "hsl(232, 10%, 55%)",
        "Grayish-blue": "hsl(210, 4%, 67%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
