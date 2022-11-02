const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        path: 'dist',
        filename: 'app.bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Webpack Demo Project - Using HtmlWebpackPlugin',
        minify: {
            collapseWhitespace: true
        },
        hash: true,
        template: './src/index.html'
    })
    ]
}