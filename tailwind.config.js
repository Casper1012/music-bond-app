/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sm_customBg: '#21202A',
        sm_customFocus: '#282733',
        sm_borderFocus: '#0060D9',
        sm_connectBg: '#1B1A22',
      },
      boxShadow: {
        'custom-blue': '0 4px 8px 0 rgba(6, 116, 252, 0.35), 0 6px 20px 0 rgba(13, 118, 247, 0.35)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui'],
      },
      fontSize: {
        base: ['16px', '20.16px'], // Size 16px, Line height 20.16px
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #0674FC 0%, #3C5CFF 100%)',
      },
    },
  },
  plugins: [],
}