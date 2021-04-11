const printHello = require('./extra')
const add = require('./extra')
const less = require('./extra')


const hello = printHello
console.log(hello)

const sum = add(1,5)
const minus = less(1,5)

console.log(sum)
console.log(minus)

// A: Require -we can't selectively load only the pieces we need. 
//    Import -we can selectively load only the pieces we need.

//require back end
//import front
