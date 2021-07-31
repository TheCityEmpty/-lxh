const getProStr = (pro) => Object.prototype.toString.call(pro)

export const isObject = (pro) => getProStr(pro) === '[object Object]'
export const isPromise = (pro) => getProStr(pro) === '[object Promise]'
export const isNumber = (pro) => getProStr(pro) === '[object Number]'
export const isString = (pro) => getProStr(pro) === '[object String]'
export const isBoolean = (pro) => getProStr(pro) === '[object Boolean]'
export const isRegExp = (pro) => getProStr(pro) === '[object RegExp]'
export const isDate = (pro) => getProStr(pro) === '[object Date]'
export const isFunction = (pro) => getProStr(pro) === '[object Function]'
export const isSymbol = (pro) => getProStr(pro) === '[object Symbol]'
export const isSet = (pro) => getProStr(pro) === '[object Set]'
export const isMap = (pro) => getProStr(pro) === '[object Map]'
export const isDom = (pro) => {
  return typeof HTMLElement === 'function' ?
    pro instanceof HTMLElement :
    pro && typeof pro === 'object' && pro.nodeType === 1 && typeof pro.nodeName === 'string'
}
