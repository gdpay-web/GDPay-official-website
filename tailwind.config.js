module.exports = {
  mode: 'jit',
  content: ['./components/**/*.{vue,js}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}'],
  theme: {
    extend: {
      colors: {
        blue: '#0b75ff'
      },
      backgroundImage: {
        'home-bg': "url('static/images/bg.png')",
        'download-bg': "url('static/images/download-bg.png')",
        'else-bg': "url('static/images/shutterstock_1124840219.png')",
        'else-bg-pc': "url('static/images/else-bg-pc.png')",
        'nav-bg': "url('static/images/NAV-BG.png')",
        'input-bg': "url('static/images/input.png')",
        tag: "url('static/images/tag.png')",
        next: 'url("static/images/go-to-detail.png")',
        'pc-home-bg': "url('static/images/bg-pc.png')",
      },
      boxShadow: {
        gd: '0vw 0vw 2.778vw 0vw rgba(4, 0, 0, 0.1)',
        'gd-pc': '0px 0px 30px 0px rgba(4, 0, 0, 0.2)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
