module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ["prismjs", {
      "languages": ["javascript", "css", "markup"], // 这是语言类型
      "plugins": ["line-numbers"], // 使用了行号还可以添加其他插件，具体看官网
      "theme": "solarizedlight", // 主题 okaidia  solarizedlight tomorrow
      "css": true
    }]
  ]
}
