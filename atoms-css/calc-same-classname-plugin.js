class CalcSameClassNamePlugin {
    apply (compiler) {
        compiler.hooks.emit.tapAsync('CalcSameClassNamePlugin', (
            compilation, cb
        ) => {
            const assets = compilation.assets
            Object.entries(assets).forEach(([filename, { source }])=>{
                if (/\.css$/.test(filename)) {
                    getCSSClassName(assets[filename].source())
                }
            })

        })
    }
}

function getCSSClassName (source) {
    console.log('\n ~~~~~~~~~~~~~~~')
    console.log(source)
    source.replace(/(\.)(.*?)(\{)/g, (m, $1, $2, $3) => {
        console.log('类名：' + (m, $1, $2, $3))
    })
    console.log('\n ~~~~~~~~~~~~~~~')
}

module.exports = CalcSameClassNamePlugin