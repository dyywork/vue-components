const path = require('path')

const md = require('markdown-it')();

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-components/'
        : '/',
    configureWebpack: {
      resolve: {
          alias: {
              "@docs":  path.join(__dirname, 'docs'),
              "@src":  path.join(__dirname, 'src'),
          }
      }
    },
    chainWebpack: config => {
        config.module.rule('md')
            .test(/\.md/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options({
                raw: true,
                preventExtract: true,
                use: [
                    [require('markdown-it-container'), 'tip'],
                    [require('markdown-it-container'), 'warning'],
                    [require('markdown-it-container'), 'danger'],
                    [require('markdown-it-container'), 'details'],
                    [require('markdown-it-container'), 'dome', {
                        validate: function(params) {
                            console.log(params);
                            return true
                        },

                        render: function (tokens, idx) {
                            const m = tokens[idx].info.trim().match(/^dome\s+(.*)$/);
                            console.log(tokens[idx]);
                            if (tokens[idx].nesting === 1) {
                                // opening tag
                                return '<el-card class="dome">';

                            } else {
                                // closing tag
                                return '</el-card>';
                            }
                        }
                    }],
                ],
            })
    }
}