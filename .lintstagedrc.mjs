export default {
  '*.{ts,tsx}': [
    'eslint --config eslint.config.mjs --fix',
    'prettier --write',
    'vitest related --run',
  ],
  '*.{json,md}': ['prettier --write'],
};
