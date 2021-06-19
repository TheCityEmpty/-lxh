const fs =  require('fs')
const path = require('path')


/**
 * 
 * @param {String} url 
 * @returns position url
 */
const resolve = url => {
    return path.resolve(__dirname, url)
}

/**
 * 读取文件/文件目录
 * @param {String} url 
 * @returns 文件目录
 */
const readDir = url => {
    return fs.readdirSync(resolve(url))
}

/**
 * 
 * @param {*} url 
 * @returns file is exit
 */
const fsIsExit = url => {
    return fs.existsSync(resolve(url))
}

/**
 * 创建文件并写入数据
 * @param {*} url 
 * @param {*} blod 
 */
const createFile = (url, blod) => {
    fs.writeFileSync(resolve(url), blod)
}

/**
 * 创建目录和文件
 * @param {Stirng} url 相对路径
 * @param {String} file 
 * @param {Boolean} isCover 文件存在时是否覆盖 默认 false
 */
 const createDirFile = (url, file, isCover = false) => {
    // 正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"

    // 分隔符
    const sep = path.sep
    const { dir, base: fileName } = path.parse(resolve(url))
    const dirs = dir.split(sep)
    let lastDir = ''
    // 不存在的目录
    const unExistsDir = []
    dirs.forEach((d, di) => {
        if (lastDir && !fs.existsSync(lastDir)) {
            unExistsDir.push(lastDir)
        }
        lastDir = lastDir + sep + dirs[di + 1]
    })

    if (unExistsDir.length) {
        // 对不存在的目录 遍历创建
        unExistsDir.forEach(unExistDir => {
            fs.mkdirSync(unExistDir)
        })
    }
    
    // 文件不存在
    if (!fsIsExit(fileName) || isCover) {
        createFile(url, file || '')
    }
}


module.exports = {
    __readDir: readDir,
    __createDirFile: createDirFile,
    __createFile: createFile,
    __fsIsExit: fsIsExit
}