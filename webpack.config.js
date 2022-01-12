const path = require('path');
// Plugin agregado al proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js']
    },
    // Modulo que es un objeto que internamente usa rules para estableces un arreglo donde se tienen las configuraciones de babel loader
    module: {
        rules: [
            {
                // Utiliza cualquier extension que sea mjs (extension de modulos) o js
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            // Regla para reconocer el CSS
            {
                test: /\.css|styl$/i,
                use: [MiniCssExtractPlugin.loader, 
                'css-loader',
                'stylus-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin(),
    ]
}