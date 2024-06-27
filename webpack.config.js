const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'), // bundle.js output path
        filename: 'bundle.js', // bundle file name
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'src/index.html', // to import index.html file inside index.js
        }),
    ],
    devServer: { port: 3030 },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // js & jsx files
                exclude: /node_modules/, // excluding the node mudules folder
                use: { loader: 'babel-loader' },
            },
            {
                test: /\.(sa|sc|c)ss$/, // sass, scss, css files
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader',
                options: { limit: false },
            },
        ],
    },
};
