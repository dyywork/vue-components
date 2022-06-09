const hljs = require('highlight.js')

/*
* markdown demo code setting
* */
const demo = {
    validate(params) {
        return params.trim().match(/^demo\s*(.*)$/);
    },
    render(tokens, idx) {
        if (tokens[idx].nesting === 1) {
            const content = tokens[idx + 1].type === 'html_block' ? tokens[idx + 1].content : '';
            return '<div class="flex_col"><dyy-code><pre v-pre class="hljs"><code>' +
                hljs.highlight("html", content, true).value +
                '</code></pre></dyy-code>'
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