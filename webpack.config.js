module.exports = {
    entry: ["./src/index.js"],
    output: {
        path: "./dest",
        publicPath: "/dest/",
        filename: "dest.js",
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
        ]
    }
};
