import js from "@eslint/js";

// These are not eslint9 compatible. Using compatibility fallback below
// import prettier from "eslint-plugin-prettier";
// import vuePrettier from "@vue/eslint-config-prettier";
// import vue from "eslint-plugin-vue";

import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });
export default [
  js.configs.recommended,
  ...compat.extends("plugin:vue/vue3-essential"),
  ...compat.extends("prettier"),
  ...compat.extends("@vue/prettier"),
];

// export default [
//   js.configs.recommended,
//   vue.configs.vue,
//   prettier.configs.recommended,
//   vuePrettier,
//   {
//     files: ["**/*.{vue,js,mjs,ts}"],
//     ignores: ["node_modules"],
//     extends: [
//       "eslint:recommended",
//       "plugin:vue/vue3-essential",
//       "prettier",
//       "@vue/prettier",
//     ],
//   },
// ];
