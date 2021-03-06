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
        PlayfairSC: ["'Playfair Display SC'", ...fontFamily.sans],
        Playfair: ["'Playfair Display'", ...fontFamily.sans],
        DM: ["'DM Serif Display'", ...fontFamily.sans],
        Poppins: ['Poppins', ...fontFamily.sans],

      },
      colors:{
        'BlackBlue':'#05060a',
        'Red':'#fe2c54',
        'Purple':'#3e82fc',
        'Yellow':'#f4b600',
        'GrayBlue':'#5d616f',
        'HardPurple':'#3268ca',
        'LightPurple':'#ecf3ff',

      }
    },
  },
  plugins: [],
}
