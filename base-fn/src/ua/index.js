export const getUserAgent = () => {
  return navigator.userAgent.toLowerCase()
}

let isIOSCache = null
export const isIOS = () => {
  if (isIOSCache === null) {
    isIOSCache = /iphone|ipad|ipod/.test(getUserAgent())
  }

  return isIOSCache
}

let isAndroidCache = null
export const isAndroid = () => {
  if (isAndroidCache === null) {
    isAndroidCache = getUserAgent().indexOf('android') > -1
  }

  return isAndroidCache
}

let isWechatCache = null
export const isWechat = () => {
  if (isWechatCache === null) {
    isWechatCache = getUserAgent().indexOf('micromessenger') > -1
  }
  return isWechatCache
}

let isTiebaCache = null
export const isTieba = () => {
  if (isTiebaCache === null) {
    isTiebaCache = getUserAgent().indexOf('tieba') > -1
  }
  return isTiebaCache
}

let isIPhoneXCache = null
export const isIPhoneX = () => {
  if (isIPhoneXCache === null) {
    const screen = window.screen
    const h = screen.height
    const w = screen.width
    isIPhoneXCache = isIOS() && (h === 812 && w === 375 || h === 896 && w === 414 || h === 844 && w === 390)
  }

  return isIPhoneXCache
}

let isWechatMiniProgramCache = null
export const isWechaMiniProgram =() => {
  if (isWechatMiniProgramCache === null) {
    isWechatMiniProgramCache = isWechat() && getUserAgent().indexOf('miniprogram') > -1
  }

  return isWechatMiniProgramCache
}

let isQQCache = null
export const isQQ =() => {
  if (isQQCache === null) {
    isQQCache = getUserAgent().indexOf('qq') > -1
  }

  return isQQCache
}

let isQQBrowserCache = null
export const isQQBrowser =() => {
  if (isQQBrowserCache === null) {
    isQQBrowserCache = getUserAgent().indexOf('mqqbrowser') > -1
  }

  return isQQBrowserCache
}

let isWeiboCache = null
export const isWeibo =() => {
  if (isWeiboCache === null) {
    isWeiboCache = getUserAgent().indexOf('weibo') > -1
  }

  return isWeiboCache
}

export const getIOSSystemVersionString = () => {
  const reg = /os [\d._]+/ig
  return isIOS() && getUserAgent().match(reg).toString().replace(/[^0-9]_./ig, '').replace(/_/ig, '.')
}

export const getAndroidSystemVersionString = () => {
  const reg = /android [\d._]+/ig
  return isAndroid() && getUserAgent().match(reg).toString().replace(/[^0-9|_.]/ig, '').replace(/_/ig, '.')
}

export function getAndroidSystemVersion () {
  return getAndroidSystemVersionString() && parseInt(getAndroidSystemVersionString().split('.')[0])
}

export function getIosSystemVersion () {
  return getIOSSystemVersionString() && parseInt(getIOSSystemVersionString().split('.')[0])
}

let isLowVersionIOSCache = null
export function isLowVersionIOS() {
  if (isLowVersionIOSCache === null) {
    isLowVersionIOSCache = getIosSystemVersion() < 11
  }
  return isLowVersionIOSCache
}
console.log('cc')

let isLowVersionAndroidCache = null
export function isLowVersionAndroid() {
  if (isLowVersionAndroidCache === null) {
    isLowVersionAndroidCache = getAndroidSystemVersion() < 9
  }
  return isLowVersionAndroidCache
}

// 判断低版本设备 (非安卓/IOS系统会返回true)
export function isLowVersionDevice() {
  if (isIOS()) {
    return isLowVersionIOS()
  }
  if (isAndroid()) {
    return isLowVersionAndroid()
  }
  return true
}

