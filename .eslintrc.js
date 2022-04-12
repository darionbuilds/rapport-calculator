module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['airbnb', 'airbnb-typescript'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
};
