const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      html: {
        height: '100%',
      },
      body: {
        backgroundColor: '#fafafa',
        height: '100%',
      },
      '.home-sections': {
        height: '100%',
        width: '80%',
      },
      '.images-section, .login-section': {
        height: '95%',
        width: '45%',
        backgroundPositionX: 'right',
      },
      '.images-section': {
        backgroundImage: 'url(home-phone-bg.jpg)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        maxWidth: '100%',
        maxHeight: '100%',
      },
      '.card-img-top': {
        maxWidth: '50',
        alignSelf: 'center',
      },
      '.line-text': {
        padding: '0.5rem',
        fontSize: 'small',
        margin: '0',
      },
      '.line': {
        flex: '1',
        height: '1px',
        backgroundColor: 'rgb(139, 137, 137)',
      },
      '.facebook': {
        maxWidth: '1rem',
        height: 'auto',
        marginRight: '.5rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('flowbite/plugin'),
  ]
}
