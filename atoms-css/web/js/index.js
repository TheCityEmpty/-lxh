const files = require.context('../css', true, /\.less$/)
// console.log(files)
// import '../assets/test.less'
files.keys().forEach((item) => {
    console.log(item)
})
