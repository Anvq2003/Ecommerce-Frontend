import { nextui } from '@nextui-org/theme';
import withMT from '@material-tailwind/react/utils/withMT';

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        // screens: {
        // sm (640px)	max-width: 640px;
        // md (768px)	max-width: 768px;
        // lg (1024px)	max-width: 1024px;
        // xl (1280px)	max-width: 1280px;
        // 2xl (1536px)	max-width: 1536px;
        // },
      },
      borderRadius: {
        main: '20px',
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
            border: '#D2D1D6',
          }, // light theme colors
          boxShadow: {
            main: '0px 20px 60px 10px rgba(237, 237, 246, 0.2)',
          },
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            primary: '#FFFFFF',
            secondary: '#9E9DA8',
            bgPrimary: '#292E39',
            bgSecondary: '#171C28',
            border: '#292E39',
          }, // dark theme colors
          boxShadow: {
            main: '0px 20px 60px 10px rgba(23, 28, 40, 0.2)',
          },
        },
        // ... custom themes
      },
    }),
  ],
});
