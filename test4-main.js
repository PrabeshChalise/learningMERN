
// const {prabesh , rishav} = require("./test4-names");
// const sayHi = require("./test4-util");
// sayHi("Ram")
// sayHi(prabesh)
// sayHi(rishav)


const name = require("./test4-names");
const sayHi = require("./test4-util");
const a = require("./test4-names-Alternative");
const add = require("./test5-function-from-module")
const mult = require("./test5-pratctice-by-my-own")
sayHi("Ram")
sayHi(name.prabesh)
sayHi(name.rishav)
console.log(a);
add()
mult()

