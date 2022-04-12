const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//这个能帮我们复制文件到指定位置

const htmlPlugin = new HtmlPlugin({
    template: './src/index.html', //指定源文件存放路径
    filename: './index.html' //指定生成文件的存放路径
})
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './src/index.js'),
    //插件html-webpack-plugin会自动帮咱们引入这个打包的JS
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/bundle.js'
    },
    plugins: [htmlPlugin, new CleanWebpackPlugin()],
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 80
    },
    module: {
        rules: [
            // 定义了不同模块对应的 loader
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            // 处理 .less 文件的 loader
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=22222222&outputPath=images' }

        ]
    },
    devtool: 'nosources-source-map',
    resolve: {
        alias: {
            '@': path.join(__dirname, './src/')
        }
    }
}