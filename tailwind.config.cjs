const config = {
  mode: "jit",
  purge: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'list': '1fr 30%',
      }
    },
  },
  variants: {
    display: ['children', 'default', 'children-first', 'children-last', 'children-odd', 'children-even', 'children-not-first', 'children-not-last', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
  },
  plugins: [
    require('tailwindcss-children'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

module.exports = config;
