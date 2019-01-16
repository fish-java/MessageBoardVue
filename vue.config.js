module.exports = {
  outputDir: './dist', // 打包结果所在的目录
  indexPath: '../index.html', // 相对于outputDir的,确保index.html在根目录
  publicPath: './dist' // 确保index.html通过相对路劲正确的找到资源
}
