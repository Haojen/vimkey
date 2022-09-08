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
        config.module.rule('fragment')
            .test(/\.frag$/)
            .use('raw-loader')
            .loader('raw-loader')
            .end()
        config.module.rule('vertex')
            .test(/\.vert$/)
            .use('raw-loader')
            .loader('raw-loader')
            .end()
    }
}
