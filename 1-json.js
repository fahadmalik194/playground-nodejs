const fs = require('fs')

// const book = {
//     title: 'fahad book',
//     author: 'fahad'
// }

// //takes in object,array or any value and returns back the JSON format string
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// //takes in JSON string and give us back the Object
// const bookOBJ = JSON.parse(bookJSON)

// console.log(bookOBJ.title)


// fs.writeFileSync('1-json.json', bookJSON)


// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)

// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Fahad'
data.age = 24

const newData = JSON.stringify(data)

fs.writeFileSync('1-json.json', newData)
