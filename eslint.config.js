import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": "off",
      // `({ node, ...props }) => ...` là cách chuẩn để loại 1 prop ra khỏi spread
      // (react-markdown truyền `node` xuống, spread thẳng vào DOM sẽ warning).
      // Bỏ qua biến bị destructure ra chỉ để loại trừ, và biến đặt tên _prefix.
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          ignoreRestSiblings: true,
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    // File cấu hình + serverless function chạy trong Node, không phải browser.
    files: ['vite.config.ts', 'api/**/*.ts'],
    languageOptions: {
      globals: globals.node,
    },
  }
);
