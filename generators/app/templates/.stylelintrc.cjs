/** @type {import('stylelint').Config} */
module.exports = {
  extends: [
    // 标准的样式规范
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    // sass guideline sass-guidelin.es.
    "stylelint-config-sass-guidelines",
    // Sorts related property declarations by grouping together in the rational order.https://github.com/constverum/stylelint-config-rational-order
    "stylelint-config-rational-order",
  ],
  overrides: [
    // less支持，需要安装postcss-less
    // {
    //   files: [
    //     '**/*.less'
    //   ],
    //   customSyntax: 'postcss-less',
    // },
    // 支持html，vue使用stylelint-config-recommended-vue
    // {
    //   files: [
    //     '**/*.vue',
    //     '**/*.astro',
    //     '**/*.html'
    //   ],
    //   customSyntax: 'postcss-html',
    // }
  ],
};
