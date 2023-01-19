const escapeHtml = require("escape-html");

/*
 * markdown demo code setting
 * */
const demo = {
  validate(params) {
    return params.trim().match(/^demo\s*(.*)$/);
  },
  render(tokens, idx) {
    if (tokens[idx].nesting === 1) {
      let content =
        tokens[idx + 1].type === "html_block" ? tokens[idx + 1].content : "";
      return `<div class="flex_col"><dyy-code><template v-slot:code>${escapeHtml(
        content
      )}</template><pre v-pre><code>${escapeHtml(
        content
      )}</code></pre></dyy-code>`;
    }
    return "</div>";
  },
};
/*
 * markdown title setting
 * */
const title = {
  validate(params) {
    return params.trim().match(/^title\s*(.*)$/);
  },
  render(tokens, idx) {
    if (tokens[idx].nesting === 1) {
      const title = tokens[idx].info.trim().match(/^title\s*(.*)$/)[1];
      return `<dyy-title title-name="${title}">`;
    }
    return "</dyy-title>";
  },
};
// markdown table setting
const table = {
  validate(params) {
    return params.trim().match(/^table\s*(.*)$/);
  },
  render(tokens, idx) {
    if (tokens[idx].nesting === 1) {
      return '<div class="dyy_table">';
    }
    return "</div>";
  },
};

// markdown table setting
const anchor = {
  validate(params) {
    return params.trim().match(/^anchor\s*(.*)$/);
  },
  render(tokens, idx) {
    const token = tokens[idx];
    if (token.nesting === 1) {
      let anchorList = [];
      for (let key of tokens) {
        if (key.info.includes("title")) {
          const title = key.info.trim().match(/^title\s*(.*)$/)[1];
          anchorList.push(title);
        }
      }
      return `<dyy-anchor anchor-list="${anchorList}">`;
    }
    return "</dyy-anchor>";
  },
};

// markdown update
const update = {
  validate(params) {
    return params.trim().match(/^update\s*(.*)$/);
  },
  render(tokens, idx) {
    if (tokens[idx].nesting === 1) {
      const m = tokens[idx].info.trim().match(/^update\s*(.*)$/);
      const content =
        tokens[idx + 1]?.type === "fence" ? tokens[idx + 1].content : "";
      let updateList = [];
      if (m && content) {
        updateList.push({
          time: m[1].split(" ")[0],
          version: m[1].split(" ")[1],
          content: content,
        });
      }

      return `<dyy-update timeline-list='${JSON.stringify(updateList)}'>`;
    }
    return "</dyy-update>";
  },
};

module.exports = { demo, title, table, anchor, update };
