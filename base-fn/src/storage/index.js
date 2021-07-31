const TYPES_MAP = {
  local: window.localStorage,
  session: window.sessionStorage
}
const MAX_LENGTH = 5242800

export default class Storage {
  constructor(type) {
    if (typeof window === 'undefined') {
      throw Error('当前不在浏览器环境！')
    }
    this.type = type
    this.events = {}
  }

  getItem(key, fn) {
    try {
      return this.toQuote(TYPES_MAP[this.type].getItem(key), fn)
    } catch (error) {
      return TYPES_MAP[this.type].getItem(key, fn)
    }
  }

  setItem(key, val) {
    try {
      TYPES_MAP[this.type].setItem(key, this.toJSON(val))
      this.events[key] && this.events[key].fn && this.events[key].fn()
    } catch (error) {
      console.log(error)
    }
  }

  on(key, fn, that, isReplace = true) {
    if (!isReplace && this.events[key] && this.events[key].fn) return
    this.events[key] = {
      fn
    }
  }

  removeItem(key) {
    TYPES_MAP[this.type].removeItem(key)
  }

  clear() {
    TYPES_MAP[this.type].clear()
  }

  key(n) {
    return TYPES_MAP[this.type].key(n)
  }

  getAllItem() {
    return TYPES_MAP[this.type]
  }

  toJSON(quote) {
    return JSON.stringify(quote)
  }

  toQuote(Str, fn) {
    return JSON.parse(Str, fn)
  }

  getMaxLength () {
    return MAX_LENGTH
  }

  getCurrentLength () {
    return Object.key(this.getAllItem()).reduce((total, curKey) => {
      if (!Object.prototype.hasOwnProperty.call(TYPES_MAP[this.type], curKey)) {
        return total
      }

      total += TYPES_MAP[this.type][curKey].length + curKey.length
      return total
    }, 0)
  }
}
