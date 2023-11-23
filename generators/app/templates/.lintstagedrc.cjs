/** @type {import('lint-staged').LinterConfig} */
module.exports = {
  "*": "prettier --ignore-unknown --write",
  "*.{js,cjs,jsx,ts,tsx,mdx}": ["eslint --fix", "jscpd"],
  "*.css": ["stylelint"],
  "*.less": ["stylelint --syntax=less"],
  "*.scss": ["stylelint --syntax=scss"],
  "*.sass": ["stylelint"],
};
