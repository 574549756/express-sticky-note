var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: path.join(__dirname, 'javascripts/app/index.js'),
    output: {
        path: path.join(__dirname, '../public/javascripts'),
        filename: 'index.js'
    },
    resolve: {
        alias: {
            jquery: path.join(__dirname, 'javascripts/lib/jquery-3.3.1.min.js'),
            mod: path.join(__dirname, 'js/mod'),
            less: path.join(__dirname, 'less')
        }
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ]
}
