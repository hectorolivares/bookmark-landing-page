/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': [ 'Rubik', 'ui-sans-serif', 'system-ui' ],
      'mono': [ 'JetBrains Mono', 'ui-monospace', 'SFMono-Regular' ],
    },
    extend: {
      colors: {
        'bm-blue': '#5266DF',
        'bm-red': '#FA5B5A',
      }
    },
    screens: {
      'mob': '414px',
      // => @media (min-width: 414px) { ... }

      'tab': '768px',
      // => @media (min-width: 768px) { ... }

      'lap': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desk': '1300px',
      // => @media (min-width: 1300px) { ... }
    },
  },
  plugins: [],
}