const path = require('path')
const hljs = require("highlight.js")
const md = require('markdown-it');
md({
    html: true
})
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',
    configureWebpack: {
      resolve: {
          alias: {
              "@docs":  path.join(__dirname, 'docs'),
              "@src":  path.join(__dirname, 'src'),
          }
      }
    },
    parallel: false,
    chainWebpack: config => {
        config.module.rule('md')
            .test(/\.md/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('dingyongya-vue-markdown-loader')
            .loader('dingyongya-vue-markdown-loader/lib/markdown-compiler')
            .options({
                raw: true,
                preventExtract: true,
                script: true,
                use: [
                    [require('markdown-it-container'), 'tip'],
                    [require('markdown-it-container'), 'warning'],
                    [require('markdown-it-container'), 'danger'],
                    [require('markdown-it-container'), 'details'],
                    [require('markdown-it-container'), 'demo', {
                        validate(params) {
                            return params.trim().match(/^demo\s*(.*)$/);
                        },
                        render(tokens, idx) {
                            if (tokens[idx].nesting === 1) {
                                const content = tokens[idx + 1].type === 'html_block' ? tokens[idx + 1].content : '';
                                return '<div class="flex_col"><dyy-code><pre class="hljs"><code>' +
                                    hljs.highlight("html", content, true).value +
                                    '</code></pre></dyy-code>'
                            }
                            return '</div>';
                        }}
                    ],
                    [require('markdown-it-container'), 'title', {
                        validate(params) {
                            return params.trim().match(/^title\s*(.*)$/);
                        },
                        render(tokens, idx) {
                            if (tokens[idx].nesting === 1) {
                                return '<fieldset class="dyy_fieldset_title"><legend>'
                            }
                            return '</legend></fieldset>';
                        }}
                    ],
                ],
            })
    }
}