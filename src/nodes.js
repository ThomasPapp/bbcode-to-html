const nodes = [
    {
        tag: "url",
        html_open: attr => `<a href="${attr || "#"}">`,
        html_close: "</a>"
    },
    {
        tag: "b",
        html_open: "<strong>",
        html_close: "</strong>"
    }
];

function get(tag) {
    const node = nodes.find(node => node.tag === tag);

    if (!node) {
        throw "Unsupported node tag of "+ tag;
    }

    return node;
}

module.exports = {
    nodes,
    get
};