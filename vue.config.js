module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vimkey/'
        : '/',
    chainWebpack: config => {
        config.module.rule('md')
            .test(/\.md$/)
            .use('raw-loader')
            .loader('raw-loader')
            .end()
    }
}
