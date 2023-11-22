let includePreflight;
includePreflight = true;

module.exports = {
  darkMode: ['class', '.manual-dark-mode'],
  content: [
    "./src/_includes/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/_data/*.json",
    "./src/pages/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/index.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "src/scripts/main.js",
    "src/scripts/vendor/flowbite.js",
    "./src/scripts/*.{js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    // extend the default Tailwind theme.
    extend: {
      colors: {
        body: '#000',
        primary: {
          100: 'var(--tw-color-primary-100)',
          300: 'var(--tw-color-primary-300)',
          DEFAULT: 'var(--tw-color-primary-500)',
          700: 'var(--tw-color-primary-700)',
          900: 'var(--tw-color-primary-900)',
        },
        secondary: {
          100: 'var(--tw-color-secondary-100)',
          DEFAULT: 'var(--tw-color-secondary-300)',
          500: 'var(--tw-color-secondary-500)',
        },
        tertiary: 'var(--tw-color-tertiary)',
        gray: {
          100: 'var(--tw-color-gray-100)',
          200: 'var(--tw-color-gray-200)',
          300: 'var(--tw-color-gray-300)',
          400: 'var(--tw-color-gray-400)',
          500: '#68767d', // required for <select> caret https://github.com/tailwindlabs/tailwindcss-forms/issues/17
          600: 'var(--tw-color-gray-600)',
          700: 'var(--tw-color-gray-700)',
          800: 'var(--tw-color-gray-800)',
        },
        muted: 'var(--tw-color-gray-400)',
        light: 'var(--tw-color-gray-100)',
        dark: 'var(--tw-color-gray-800)',
        info: {
          100: 'var(--tw-color-info-100)',
          300: 'var(--tw-color-info-300)',
          DEFAULT: 'var(--tw-color-info-500)',
          700: 'var(--tw-color-info-700)',
          900: 'var(--tw-color-info-900)',
        },
        error: {
          100: 'var(--tw-color-error-100)',
          300: 'var(--tw-color-error-300)',
          DEFAULT: 'var(--tw-color-error-500)',
          700: 'var(--tw-color-error-700)',
          900: 'var(--tw-color-error-900)',
        },
        warning: {
          100: 'var(--tw-color-warning-100)',
          300: 'var(--tw-color-warning-300)',
          DEFAULT: 'var(--tw-color-warning-500)',
          700: 'var(--tw-color-warning-700)',
          900: 'var(--tw-color-warning-900)',
        },
        success: {
          100: 'var(--tw-color-success-100)',
          300: 'var(--tw-color-success-300)',
          DEFAULT: 'var(--tw-color-success-500)',
          700: 'var(--tw-color-success-700)',
          900: 'var(--tw-color-success-900)',
        },
      },
      fontFamily: {
        'serif': ['Monz-1500MegaRegular', 'sans-serif'],
        'sans': ['Monz-069HexagonaBold', 'serif'],
      },
      spacing: {
        'section': 'calc(11 * var(--spacer))',
        'section-sm': 'calc(4 * var(--spacer))',

        'spacer-1/2': 'calc(0.5 * var(--spacer))',
        'spacer-1': 'var(--spacer)',
        'spacer-1.5': 'calc(1.5 * var(--spacer))',
        'spacer-2': 'calc(2 * var(--spacer))',
        'spacer-3': 'calc(3 * var(--spacer))',
        'spacer-4': 'calc(4 * var(--spacer))',
        'spacer-5': 'calc(5 * var(--spacer))',
        'spacer-7': 'calc(7 * var(--spacer))',
        'spacer-11': 'calc(11 * var(--spacer))',
        'spacer-12': 'calc(12 * var(--spacer))',
        'spacer-14': 'calc(14 * var(--spacer))',
        'spacer-21': 'calc(21 * var(--spacer))',
        'spacer-29': 'calc(29 * var(--spacer))',
      },
      textUnderlineOffset: {
        spacer: 'var(--spacer)',
      },
      gap: {
        'spacer-2': 'calc(2 * var(--spacer))',
      },
      fontSize: {
        'spacer-1': 'var(--spacer)',
        'spacer-2': 'calc(2 * var(--spacer))',
        'spacer-3': 'calc(3 * var(--spacer))',
      },  
      maxWidth: {
        'screen-3xl': '1920px',
      },
      zIndex: {
        '1': '1',
      },
      gridTemplateColumns: {
        // 30 = 2+12+2+12+2 mobile grid
        '30': 'repeat(30, minmax(0, 1fr))',
        // 96 column grid, base for the MONZ layout
        '96': 'repeat(96, minmax(0, 1fr))',
        // 82 column grid, 96-7-7, inside the container
        '82': 'repeat(82, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-26': 'span 26 / span 26',
        'span-40': 'span 40 / span 40',
        'span-82': 'span 82 / span 82',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-106px)' },
          '100%': { transform: 'translateY(0)' },
        },
        enlarge: {
          '0%': { transform: 'scale(.25)' },
          '50%': { transform: 'scale(.25)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn .3s forwards',
        'slide-down': 'slideDown .3s forwards',
        'enlarge': 'enlarge .3s forwards',
      },
    },
    screens: {
      'xsmax': { 'max': '320px' }, // => @media (max-width: 320px) { ... }
      'sm': '640px', // => @media (min-width: 640px) { ... }
      'md': '768px', // => @media (min-width: 768px) { ... }
      'lg': '1024px', // => @media (min-width: 1024px) { ... }
      'xl': '1280px', // => @media (min-width: 1280px) { ... }
      '2xl': '1536px', // => @media (min-width: 1536px) { ... }
    },
  },
  corePlugins: {
    // Disable Preflight base styles in CSS targeting the editor.
    preflight: includePreflight,
  },
  plugins: [
    // Add Tailwind Typography.
    require('@tailwindcss/typography'),
    // Uncomment below to add additional first-party Tailwind plugins.
    require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/container-queries'), // https://github.com/tailwindlabs/tailwindcss-container-queries
    require('flowbite/plugin'),
  ],
};
