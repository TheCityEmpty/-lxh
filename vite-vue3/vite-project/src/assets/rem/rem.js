const setRem = () => {
    const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
    const htmlEl = document.getElementsByTagName('html')[0]
    if (htmlWidth > 400) {
        htmlEl.style.fontSize = '25px'
        return
    }
    htmlEl.style.fontSize = htmlWidth / 16 + 'px'
}

setRem()

window.onresize = () => {
    setRem()
}