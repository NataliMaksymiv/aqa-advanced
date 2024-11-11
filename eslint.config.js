import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    "rules": {
      "semi": "error", // або 2
      "no-console": "warn", // або 1
      "no-unused-vars": "off" // або 0
    }
  }
];