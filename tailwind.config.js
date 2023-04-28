/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-0deg)",
          },
          "50%": {
            transform: "rotate(100deg)",
          },
        },
       
      },
      animation: {
        wiggle1: "wiggle 50s ease-in-out infinite",
        wiggle2: "wiggle 55s ease-out infinite",
        wiggle3: "wiggle 52s ease-in infinite",
        wiggle4: "wiggle 56s out-back infinite",
        wiggle5: "wiggle 58s out-cubic infinite",
      },
    },
  },
  variants: {},
  plugins: [],
};
