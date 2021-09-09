const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    
    mode: 'development',
    entry: './app/src/app.ts',
    output: {
        path: path.resolve(__dirname, './app/dist/'),
        filename: 'js/main.js',
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    watch: true,
    module: {
        rules: [
                {
                    test: /\.tsx?/,
                    use: {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        }
                    },           
                    exclude: /node_modules/
                },

                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader']
                }            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/src/index.html',
            hash: true
        }),
        new MiniCssExtractPlugin({
                filename: 'css/main.css'
            }
        ),
    ]
}