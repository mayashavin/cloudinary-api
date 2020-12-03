export const toString = (arr:any[], separation:string = ':') => arr.filter(Boolean).join(separation)

export const cleanText = (text:string):string => encodeURIComponent(text).replace(/%(23|2C|2F|3F|5C)/g, '%25$1')
