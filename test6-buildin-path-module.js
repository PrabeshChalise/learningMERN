const path = require("path")
console.log(path.sep);
const filePath = path.join("/content", "xyz", "text.txt")
console.log(filePath)
console.log(path.basename(filePath))
console.log(path.resolve(__dirname, "content", "xyz", "text.txt"))