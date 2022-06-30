const {guessProductionMode} = require('@ngneat/tailwind');

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
  prefix: '',
  mode: process.env.TAILWIND_MODE ? 'jit' : '',
  content: [
    './apps/**/*.{html,ts,css,scss,sass,less,styl}',
    './libs/**/*.{html,ts,css,scss,sass,less,styl}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
