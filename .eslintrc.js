module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['airbnb-typescript/base'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
};
