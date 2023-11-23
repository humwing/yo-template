/** @type {import("@commitlint/types").UserConfig} */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [2, "always"],
    "body-max-line-length": [2, "always", 10000],
    "footer-leading-blank": [2, "always"],
    "footer-max-line-length": [2, "always", 10000],
    "header-max-length": [2, "always", 100],
    "scope-case": [2, "always", "lower-case"],
    "scope-empty": [0, "always"],
    "type-empty": [0, "never"],
    "scope-max-length": [2, "never", 100],
    "type-case": [2, "always", "lower-case"],
    "type-enum": [
      2,
      "always",
      [
        "init",
        "update",
        "feat",
        "fix",
        "hotfix",
        "perf",
        "docs",
        "refactor",
        "chore",
        "build",
        "revert",
        "test",
        "style",
      ],
    ],
  },
  prompt: {
    // messages: {
    //   skip: "可以跳过此配置",
    //   max: "最大可输入 %d 个字",
    //   min: "最少需要输入 %d 个字",
    //   emptyWarning: "此配置不能为空\n",
    //   upperLimitWarning: "已超出最大字符数",
    //   lowerLimitWarning: "字数过少，请重新输入"
    // },
    // questions: {
    //   type: {
    //     description: "请选择本次提交的内容类型:",
    //     enum: {
    //       feat: {
    //         description: '新需求',
    //         title: 'Features',
    //         emoji: '✨',
    //       },
    //       fix: {
    //         description: '修复bug',
    //         title: 'Bug Fixes',
    //         emoji: '🐛',
    //       },
    //       docs: {
    //         description: '只有文档变更',
    //         title: 'Documentation',
    //         emoji: '📚',
    //       },
    //       hotfix: {
    //         description: '线上问题修复',
    //         title: 'Hot Fixes',
    //         emoji: '🐛',
    //       },
    //       style: {
    //         description: '修改样式',
    //         title: 'Styles',
    //         emoji: '💎',
    //       },
    //       refactor: {
    //         description: '代码重构',
    //         title: 'Code Refactoring',
    //         emoji: '📦',
    //       },
    //       perf: {
    //         description: '性能优化相关',
    //         title: 'Performance Improvements',
    //         emoji: '🚀',
    //       },
    //       test: {
    //         description: '测试用例相关修改',
    //         title: 'Tests',
    //         emoji: '🚨',
    //       },
    //       build: {
    //         description: '影响构建相关的修改',
    //         title: 'Builds',
    //         emoji: '🛠',
    //       },
    //       ci: {
    //         description: 'CI相关的修改',
    //         title: 'Continuous Integrations',
    //         emoji: '⚙️',
    //       },
    //       chore: {
    //         description: "其他杂项更新，非源代码层面的修改",
    //         title: 'Chores',
    //         emoji: '♻️',
    //       },
    //       revert: {
    //         description: '版本回退',
    //         title: 'Reverts',
    //         emoji: '🗑',
    //       },
    //     },
    //   },
    //   scope: {
    //     description:
    //       '本次变动涉及的领域(多个请使用/标记)',
    //   },
    //   subject: {
    //     description: '本次变更的主题，简短描述',
    //   },
    //   body: {
    //     description: '变更详细描述',
    //   },
    //   isBreaking: {
    //     description: '本次是否有破坏性变更(breaking changes)?',
    //   },
    //   breakingBody: {
    //     description:
    //       '本次破坏性变更(breaking changes)描述',
    //   },
    //   breaking: {
    //     description: '描述详细的破坏性变化点',
    //   },
    //   isIssueAffected: {
    //     description: '是否有对open issues的修改?',
    //   },
    //   issuesBody: {
    //     description:
    //       'issues改动详细描述',
    //   },
    //   issues: {
    //     description: '添加issues (如 "fix #123", "re #123".)',
    //   },
    // }
  },
};
