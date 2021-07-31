module.exports = {
  extends: 'eslint:recommended',
  rules: {
    'no-console': 'off' ,
    // 所有引号使用双引号
    'quotes':[2, 'single'],
    // 行首 2 单位
    'indent': [2, 2],
    // 禁用不必要括号
    'no-extra-parens': 2,
    // 强制 getter 和 setter 在对象中成对出现
    'accessor-pairs': 2,
    // 强制全等或全不等
    'eqeqeq': 2,
    // 禁止空函数
    'no-empty-function': 2,
    // 禁止扩展原生
    'no-extend-native': 2,
    // 禁用不必要的嵌套块
    'no-lone-blocks': 2,
    // 禁止多个空格
    'no-multi-spaces': 2,
    // 禁止自身进行比较
    'no-self-compare': 2,
    // 禁止一成不变的循环条件
    'no-unmodified-loop-condition': 2,
    // 禁用多余的 return 语句
    'no-useless-return': 2,
    // 要求 await async 配套使用
    'require-await': 2,
    // 禁止变量声明与外层变量同名
    'no-shadow': 2,
    // 禁止在变量定义之前使用它们
    'no-use-before-define': 2,
    // 在数组开括号后和闭括号前强制换行，但是这是基于你主动给它们换行了
    'array-bracket-newline': [ 2, { 'multiline': true } ],
    // 禁止或强制在代码块中开括号前和闭括号后有空格
    'block-spacing': 2,
    // 要求或禁止末尾逗号
    'comma-dangle': 2,
    // 要求文件末尾保留一行空行
    'eol-last': [2, 'always'],
    // 要求在函数标识符和其调用之间有空格
    'func-call-spacing': [2, 'never'],
    // 强制关键字周围空格的一致性
    'keyword-spacing': [2, { 'before': true, 'after': true }],
    // 要求构造函数首字母大写
    'new-cap': 2,
    // 禁止出现多行空行
    'no-multiple-empty-lines': 2,
    // 禁用行尾空白
    'no-trailing-spaces': 2,
    // 禁止属性前有空白
    'no-whitespace-before-property': 2,
    // 无分号主义者
    'semi': [2, 'never'],
    // 强制箭头函数的箭头前后使用一致的空格
    'arrow-spacing': 2,
    // 禁止重复模块导入
    'no-duplicate-imports': 2,
    // 不可以再使用 var 了哟
    'no-var': 2,
    // 要求对象字面量简写语法
    'object-shorthand': ['error', 'always', { 'avoidExplicitReturnArrows': true }]
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  }
}
