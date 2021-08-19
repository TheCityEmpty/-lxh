const colors = require('colors')
class CalcSameClassNamePlugin {
    apply (compiler) {
        compiler.hooks.emit.tapAsync('CalcSameClassNamePlugin', (
            compilation, cb
        ) => {
            const assets = compilation.assets
            Object.entries(assets).forEach(([filename, { source }])=>{
                if (/\.css$/.test(filename)) {
                    const sameClassNameArr = getCSSClassName(assets[filename].source())
                    let warning =''
                    if (sameClassNameArr.length) {
                        warning = ` \n${filename}文件下重复类名如下：\n${sameClassNameArr.join('\n')}
                        `
                        console.error(warning.red)
                    }
                }
            })

            cb()

        })
    }
}

function getCSSClassName (source) {
    const classNameArr = []
    const sameClassNameArr = []
    source.replace(/(\.)([a-z0-9\-_]*)(\s+)(\{)/g, (m, $1, $2, $3, $4) => {
        classNameArr.push($2)
    })

    classNameArr.forEach(className => {
        const firstIndex = classNameArr.indexOf(className)
        const lastIndex = classNameArr.lastIndexOf(className)
        if (firstIndex !== lastIndex ) {
            sameClassNameArr.push(className)
        }
    })

    return  [...new Set(sameClassNameArr)]
}

module.exports = CalcSameClassNamePlugin