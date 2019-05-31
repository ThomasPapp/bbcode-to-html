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
    },
    {
        tag: "i",
        html_open: "<i>",
        html_close: "</i>"
    },
    {
        tag: "u",
        html_open: "<u>",
        html_close: "</u>"
    },
    {
        tag: "h1",
        html_open: "<h1>",
        html_close: "</h1>"
    },
    {
        tag: "h2",
        html_open: "<h2>",
        html_close: "</h2>"
    },
    {
        tag: "h3",
        html_open: "<h3>",
        html_close: "</h3>"
    },
    {
        tag: "h4",
        html_open: "<h4>",
        html_close: "</h4>"
    },
    {
        tag: "h5",
        html_open: "<h5>",
        html_close: "</h5>"
    },
    {
        tag: "h6",
        html_open: "<h6>",
        html_close: "</h6>"
    },
    {
        tag: "color",
        html_open: attr => `<span style="color:${attr || "black"};">`,
        html_close: "</span>"
    },
    {
        tag: "center",
        html_open: `<span style="text-align: center">`,
        html_close: "</span>"
    },
    {
        tag: "list",
        html_open: "<ul>",
        html_close: "</ul>"
    },
    {
        tag: "olist",
        html_open: "<ol>",
        html_close: "</ol>"
    },
    {
        tag: "*",
        html_open: "<li>",
        html_close: ""
    },
    {
        tag: "img",
        html_open: attr => `<img src="${attr || "#"}" alt="${attr || "#"}" />`,
        html_close: ""
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