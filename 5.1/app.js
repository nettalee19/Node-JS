const fs = require('fs')

// book={
//     title:'Harry Potter',
//     auther:'J K Rowling'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('app.json', bookJSON)
// console.log(bookJSON) //this is a string. not an object! I cannot call bookJSON.title



// const parseData = JSON.parse(bookJSON) //this is the oppisite, from string to an object 
// console.log(parseData.title) 

const dataBuffer = fs.readFileSync('app.json') //ehat returns is not a string, its a buffer
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(dataJSON)