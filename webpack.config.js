const path = require('path');
module.exports = {

    mode: 'development',
    entry: './app/src/app.ts',
    output: {
        path: path.resolve(__dirname, './app/dist/js/'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
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
                exclude: /node_modules/,
            }
        ]
    },
    watch: true
}