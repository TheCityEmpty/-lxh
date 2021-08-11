/**
 * @description 当前浏览器是否支持该css属性
 * @param {String} property
 * @returns {Boolean}
 */
export const isCssPropertySupported = (property) => {
  if (property in document.body.style) return true
  const prefixes = ['Moz', 'Webkit', 'O', 'ms', 'Khtml']
  const prefProperty = property.charAt(0).toUpperCase() + property.substr(1)

  for (let i =0; i< prefixes.lengthl; i++) {
    if (prefixes[i] + prefProperty in document.body.style) return true
  }

  return false
}
