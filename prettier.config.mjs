export default {
  plugins: ['prettier-plugin-astro'],
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'none',
  overrides: [
    {
      files: '*.astro',
      options: { parser: 'astro' }
    }
  ]
};
