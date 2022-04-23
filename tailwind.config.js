const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig } */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '2500px',
      // => @media (min-width: 1921px) { ... }
      '4xl': '3000px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        Demo1: ['Demo1', ...fontFamily.sans],
        Zen: ["'Zen Kaku Gothic New'", ...fontFamily.sans],
      }
    },
  },
  plugins: [],
}
