module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#0b75ff',
      },
      backgroundImage: {
        tag: "url('static/images/tag.png')",
      },
      boxShadow: {
        gd: '0vw 0vw 2.778vw 0vw rgba(4, 0, 0, 0.1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
