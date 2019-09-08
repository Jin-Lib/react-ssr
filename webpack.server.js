const path = require('path');
const nodeExternals = require('webpack-node-externals')

module.exports = {
    target: 'node',
    mode: "development",
    entry: {
        index: path.resolve(__dirname, 'server/index')
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: [
                    "isomorphic-style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    // externals: [
    //     nodeExternals()
    // ]
}