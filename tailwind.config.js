/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      trasparent: 'transparent',
      primary: '#22c55e',
      secondary: {1:'#632336', 2: '#7d2a44', 3: '#471825'},
      fail: '#ef4444',
      pass: '#22c55e',
      dark: {
        1: '#111827',
        2: '#374151'
      },
      light: '#f7fee7',
    },
    fontFamily: {
      raleway: ['Lato', 'sans-serif']
    }
  },
  plugins: [],
}

