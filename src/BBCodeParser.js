const nodes = require("./nodes");

function parse(str) {
    if (!str) {
        throw "Parse string is empty";
    }

    let html = str.slice(0);

    const tags = str.match(/(\[[^\]^\s]{1,}\])/g);

    if (!tags || tags.length < 1)
        return html;

    let args;
    let closing;
    let name;
    let node;
    let attr;
    let open;
    tags.forEach(tag => {
        args = tag.slice(1, -1).split("=");
        closing = args[0].startsWith("/");
        name = closing ? args[0].slice(1) : args[0];
        attr = args[1];

        node = nodes.get(name);

        if (node) {
            open = typeof(node.html_open) === "function" ? node.html_open(attr) : node.html_open;
            html = html.replace(tag, closing ? node.html_close : open);
        }
    });

    return html.replace(/(?:\r\n|\r|\n)/g, "</br>");
}

module.exports = parse;