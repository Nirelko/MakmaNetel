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
        publicPath: '/'
    },
};