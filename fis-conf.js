fis.config.merge({
    modules: {
        parser: {
            less: ['less-2.x'],
        },
        postprocessor: {
            css: ['cssprefixer']
        },
    },
    settings: {
        postprocessor: {
            cssprefixer: {
                // detail config (https://github.com/postcss/autoprefixer#browsers)
                "browsers": ['Android > 2']
            }
        }
    },
    roadmap: {
        ext: {
            less: 'css',
        },
        path: [{
            reg: /\/(map.json)/i,
            release: false
        }]
    }
});

if (process.env.FIS_DEBUG == "FALSE") {
    // 注意 在package.json中 & set FIS_DEBUG=FALSE& ，FALSE后面紧挨&，是有原因的
    // 若有空格，这个接收的参数会是"FALSE "(也带了空格)

    // 生产环境，某些内容不需要发布
    console.log('----生产环境----')

} else {
    console.log('----开发环境----')
}
