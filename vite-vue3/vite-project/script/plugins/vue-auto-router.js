const { 
    __readDir,
    __createDirFile
} =  require('../utils.js')

const entryUrl = '../src/pages'
const outUrl = '../src/routers/routes.js'

const pagesDirs = __readDir(entryUrl)
let routerFiles = []

pagesDirs.forEach(dir => {
    const pathName = __readDir(`${entryUrl}/${dir}`)

    pathName.forEach(file => {
        if (file.indexOf('.') !== -1) {
            const fileName = file.split('.')[0]
            const pageUrl = `@/pages/${dir}/${file}`
            const routerStr = `{ path: '/${dir}/${fileName}', name: '${dir}.${fileName}', component: () => import('${pageUrl}') }`
            routerFiles.push(routerStr)
        }
    })
})

const lastRoutesFile = `
/**
 * @desc 自动生成文件，无需改动
 * */
export default [
    ${
        routerFiles.join(',\n    ')
    }
]
`
__createDirFile(outUrl, lastRoutesFile, true)
