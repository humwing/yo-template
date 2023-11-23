import Generator from 'yeoman-generator'
import semver from 'semver'
export default class MyGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }
  async writing() {
    this.destinationRoot(this.answers.name)
    const pkg = this.fs.readJSON(this.templatePath('package.json'))
    pkg.name = this.answers.name
    pkg.description = this.answers.description
    pkg.author = `${await this.git.name()}(${await this.git.email()})`
    if (this.answers.promptTips) {
      pkg.devDependencies['@commitlint/cz-commitlint'] = '^18.4.3'
      pkg.devDependencies['commitizen'] = '^4.3.0'
      pkg.config = pkg.config || {}
      pkg.config.commitizen = {
        path: '@commitlint/cz-commitlint'
      }
    }
    this.fs.copy(
      this.templatePath('**/*'),
      this.destinationPath()
    );
    this.fs.write(this.destinationPath(`package.json`), JSON.stringify(pkg, null, 2))
  }
  install() {
    if (this.answers.installTool != 'none') {
      // 获取版本号
      const pkg = this.packageJson.readContent()
      let isValidNode = true;
      if (pkg.engines.node) {
        const minNodeVersion = semver.minVersion(pkg.engines.node)
        const nodeVersion = semver.clean(process.version);
        isValidNode = semver.gt(nodeVersion, minNodeVersion)
        if (!isValidNode) {
          this.log(`当前Node版本为${nodeVersion}, 低于${minNodeVersion}！`)
          this.log(`请升级Node版本后，进入${this.answers.name}，安装依赖: ${this.answers.installTool} install`)
        }
      }
      if (isValidNode) {
        this.log(`corepack enable: 激活包管理工具...`)
        this.spawnSync('corepack', ['enable']);
        this.log(`🎉激活包管理工具成功！`)
        this.log(`使用 ${this.answers.installTool} 开始安装...`)
        this.spawnSync(this.answers.installTool, ['install']);
        this.log(`🍾安装完成！`)
      }
      this.log(`启动开发: npm run dev`)
    }
  }
  async prompting() {
    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "请输入项目名",
        default: "next-template" // Default to current folder name
      },
      {
        type: "input",
        name: "description",
        message: "请输入项目简介"
      },
      {
        type: "confirm",
        name: "promptTips",
        message: "是否开启提交规范提示？",
        default: false
      },
      {
        type: "list",
        name: "installTool",
        message: "选择安装工具",
        choices: [
          {
            name: "稍后安装",
            value: 'none'
          },
          {
            name: "npm",
            value: 'npm'
          },
          {
            name: "yarn",
            value: 'yarn'
          },
          {
            name: "pnpm",
            value: 'pnpm'
          }
        ],
        default: 'none'
      }
    ]);
  }
};