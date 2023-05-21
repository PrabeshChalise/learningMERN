const abc = require("lodash")
const arr = [1, [2,[3,[4]]]]
const newArr = abc.flattenDeep(arr)
console.log(newArr);