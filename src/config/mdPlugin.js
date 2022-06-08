const hljs = require('highlight.js')
const escapeHtml = require('escape-html');
/*
* markdown demo code setting
* */
const demo = {
    validate(params) {
        return params.trim().match(/^demo\s*(.*)$/);
    },
    render(tokens, idx) {
        if (tokens[idx].nesting === 1) {
            let content = tokens[idx + 1].type === 'html_block' ? tokens[idx + 1].content : '';
            return '<div class="flex_col"><dyy-code><pre v-pre><code>'+ escapeHtml(content) +'</code></pre></dyy-code>'
            // return '<div class="flex_col"><dyy-code><pre class="hljs"><code>' +
            //     hljs.highlight('html',content).value +
            //     '</code></pre></dyy-code>'
        }
        return '</div>';
    }
}
/*
* markdown title setting
* */
const title = {
    validate(params) {
        return params.trim().match(/^title\s*(.*)$/);
    },
    render(tokens, idx) {
        if (tokens[idx].nesting === 1) {
            return '<fieldset class="dyy_fieldset_title"><legend>'
        }
        return '</legend></fieldset>';
    }
}

module.exports = {demo, title}