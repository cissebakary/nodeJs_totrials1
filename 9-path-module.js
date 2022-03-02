const path = require('path')
// const seperator = path.sep
// console.log(seperator)

const filePath = path.join('contents', 'content1','text.txt')
// console.log(filePath)
console.log(path.basename(filePath))
console.log(path.resolve(__dirname, filePath))