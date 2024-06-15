const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './server/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /.(s(a|c)ss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: ['file-loader'],
            }
        ]
    },
    devServer: {
        proxy: [
            {
                context: ['/api'],
                target: 'http://localhost:3000',
                secure: false,
            },
        ],
        static: {
            publicPath: path.join(__dirname, './public')
        },
        compress: true,
        port: 8080,
        hot: true,
        open: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, '/src/index.html')
        })
    ],
}