import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    card: {
      background: '#000',
      shadow: '0 0 0 1px #EDEDF6',
      hover: {
        shadow: '0 0 0 1px #EDEDF6',
      },
    },
    extend: {
      container: {
        center: true,
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1340px',
        },
      },
      spacing: {
        main: '30px',
      },
      width: {
        main: '1340px',
      },
      colors: {
        yellow: '#FFB700',
        red: '#F94545',
        green: '#67B044',
        blue: '#0071DC',
        'light-blue': '#77DAE6',
        purple: '#7644E1',

        border: '#D2D1D6',
        line: '#EDEDF6',
      },
    },
  },
  plugins: [
    nextui({
      prefix: 'nextui', // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: 'light', // default theme from the themes object
      defaultExtendTheme: 'light', // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            primary: '#1A162E',
            secondary: '#9E9DA8',
            bgPrimary: '#F6F6F6',
            bgSecondary: '#EEEEEE',
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            primary: '#FFFFFF',
            secondary: '#9E9DA8',
            bgPrimary: '#292E39',
            bgSecondary: '#171C28',
          }, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
};
