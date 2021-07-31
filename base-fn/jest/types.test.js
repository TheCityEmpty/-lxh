import { 
    isObject,
    isPromise,
    isNumber,
    isString,
    isBoolean,
    isRegExp,
    isDate,
    isNull,
    isUndefined,
    isFunction,
    isSymbol,
    isSet,
    isMap
} from '../src/types/types.js'

test('params is object', () => {
    expect(isObject({})).toBeTruthy()
})
test('params is promise', () => {
    expect(isPromise(Promise.resolve())).toBeTruthy()
})
test('params is number', () => {
    expect(isNumber(3)).toBeTruthy()
})
test('params is string', () => {
    expect(isString('3')).toBeTruthy()
})
test('params is boolean', () => {
    expect(isBoolean(true)).toBeTruthy()
})
test('params is regexp', () => {
    expect(isRegExp(new RegExp())).toBeTruthy()
})
test('params is date', () => {
    const date = new Date()
    expect(isDate(date)).toBeTruthy()
})
test('params is null', () => {
    expect(isNull(null)).toBeTruthy()
})
test('params is undefined', () => {
    expect(isUndefined(undefined)).toBeTruthy()
})
test('params is function', () => {
    expect(isFunction(() => {})).toBeTruthy()
})
test('params is symbol', () => {
    expect(isSymbol(Symbol())).toBeTruthy()
})
test('params is set', () => {
    expect(isSet(new Set())).toBeTruthy()
})
test('params is map', () => {
    expect(isMap(new Map())).toBeTruthy()
})