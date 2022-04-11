const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
    //这个能帮我们复制文件到指定位置

const htmlPlugin = new HtmlPlugin({
    template: './src/index.html', //指定源文件存放路径
    filename: './index.html' //指定生成文件的存放路径
})
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [htmlPlugin],
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 80
    }
}