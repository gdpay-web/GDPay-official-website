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
        electron: "url('static/images/electron.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
