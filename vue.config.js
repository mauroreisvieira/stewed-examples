module.exports = {
    outputDir: 'app',
    pages: {
        index: {
            entry: 'src/main.js',
            template: './src/template/index.html',
            filename: 'index.html',
        }
    },
    publicPath: './'
}

