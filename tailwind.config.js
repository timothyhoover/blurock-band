const formKitTailwind = require('@formkit/themes/tailwindcss')

module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
    './formkit.config.js',
    `assets/**/*.{vue,js}`
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      screens: {
        xs: '375px'
      },
      colors: {
        br: {
          primary: '#4c6a86',
          success: '#b2e45b',
          tertiary: '#f98b56',
          highlight: '#fee135',
          dark: '#363732',
          white: '#f8f8f8',
          gray: '#707070'
        }
      }
    }
  },
  plugins: [formKitTailwind, require('daisyui')],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: 'd',
    darkTheme: 'dark'
  }
}
