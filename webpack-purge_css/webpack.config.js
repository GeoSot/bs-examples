const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')


module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // javascript = babel + uglify
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',

                }

            },

            // css file: extract to css file with mini extract plugin
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },

    optimization: {
        usedExports: true,
    },

    // plugin
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: false
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new PurgecssPlugin({
            paths: () => glob.sync(`${path.join(__dirname, 'src')}/**/*`, { nodir: true }),
            safelist: [/offcanvas*/, /popover*/, /bs-popover*/, /data-popper-*/],
            only:['bundle']
        })
    ]
}
