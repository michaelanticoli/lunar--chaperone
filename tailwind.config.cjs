/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f5f0e8',
        'paper-dark': '#ebe3d7',
        ink: '#1f1a17',
        'ink-light': '#6d6257',
        'ink-muted': '#9b8e81',
        gold: '#b48a3c',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'ui-serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(31, 26, 23, 0.08)',
      },
    },
  },
  plugins: [],
};
