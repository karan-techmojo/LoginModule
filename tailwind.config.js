/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
    screens: {
      'mobile': {'max': '320px'},
      // => @media (max-width: 320px) { ... }

      'tablet': {'max': '640px'},
      // => @media (max-width: 640px) { ... }

      'laptop': {'max': '1024px'},
      // => @media (max-width: 1023px) { ... }

      'desktop': {'max': '1280px'},
      // => @media (max-width: 1535px) { ... }
    },
  },
  plugins: [],
}

