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
        mc_customBg: 'rgba(27, 26, 34, 1)',
        tbl_border: 'rgba(47, 45, 59, 1)',
        tbl_tr_hover_bg: 'rgba(33, 32, 42, 1)',
        tbl_star: 'rgba(164, 164, 164, 1)',
        genre_txt_hover: 'rgba(0,96,217,1)',
        history_icon: 'rgba(164, 164, 164, 1)',
        register_btnBg: 'rgba(0, 79, 208, 1)',
        login_hover: 'rgba(40, 39, 51, 1)',
        play_sliderBg: 'rgba(205, 205, 205, 1)',
      },

      boxShadow: {
        'custom-blue': '0px 8px 15px 0px rgba(6, 116, 252, 0.25)',
        'geners-blue': '0px 0px 20px 0px rgba(6, 116, 252, 0.2)',
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
// rgba(0, 0, 0, 0.45)