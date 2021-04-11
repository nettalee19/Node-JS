const printHello = require('./extra')
const add = require('./extra')
const less = require('./extra')


const hello = printHello
console.log(hello)

const sum = add(1,5)
const minus = less(1,5)

console.log(sum)
console.log(minus)