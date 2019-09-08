const path = require('path');
const nodeExternals = require('webpack-node-externals')

module.exports = {
    target: 'node',
    mode: "development",
    entry: {
        main: path.resolve(__dirname, 'client/index')
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "public")
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
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    // externals: [
    //     nodeExternals()
    // ]
}