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
            // return '<div class="flex_col"><dyy-code><pre v-pre><code>'+ escapeHtml(content) +'</code></pre></dyy-code>'
            return `<div class="flex_col"><dyy-code><template v-slot:code>${escapeHtml(content)}</template><pre v-pre><code>${escapeHtml(content)}</code></pre></dyy-code>`
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
// markdown table setting
const table = {
    validate(params) {
        return params.trim().match(/^table\s*(.*)$/);
    },
    render(tokens, idx) {
        if (tokens[idx].nesting === 1) {
            return '<div class="dyy_table">'
        }
        return '</div>';
    }
}

module.exports = {demo, title, table}