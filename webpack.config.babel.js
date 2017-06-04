import webpack, { HotModuleReplacementPlugin, NamedModulesPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { join, resolve } from 'path';

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './client/index.js'
    ],
    output: {
        path: join(__dirname, './server/client'),
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    module : {
        rules : [
            {
                test : /\.js?/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }, {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.woff(2)?(\?v=[0-9]+\.[0-9]+\.[0-9]+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {limit: 10000}
                }]
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]+\.[0-9]+\.[0-9]+)?$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['.js', '.less', '.css', '.html']
    },
    devtool: 'inline-source-map',
    watch: true,
    devServer: {
        hot: true,
        port: 8080,
        contentBase: resolve(__dirname, 'client'),
        publicPath: '/',
        historyApiFallback: true
    },
};