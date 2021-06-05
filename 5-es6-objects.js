// console.log('E6 Aside: Object Property Shorthand & Destructuring')

// //object property without shorthand

// const name = "Andrew"
// const userAge = 27

// const user = {
//     name: name,
//     age: userAge,
//     location: 'New York'
// }
// console.log(user)

// //Output as expected: { name: 'Andrew', age: 27, location: 'New York' }

// //object property without shorthand
// const name = "Andrew"
// const userAge = 27

// const user = {
//     name,
//     age: userAge,
//     location: 'New York'
// }
// console.log(user)

//Object Destructuring: is usefull when you have an object and your are looking to extract the object proerties

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 5
}

// const label = product.label
// const stock = product.stock

//here in this above example: we have to create consts every time when we want to store the object property

//Object Destructuring:
//  const {label:productLabel, stock, rating = 4} = product

//  console.log(productLabel, stock, rating)


 //Object Destructuring, when working with function arguments:


 const transaction = (type, {label, stock = 0} = {}) => {
    // const {label} = myProduct
    //and now gona use the (label) vaiable whereever we want to
    console.log(type, label, stock)
 }

 transaction('order', product)
 


 //ES-6 Default Funciton Parameter:
 const greet = (name = 'User') => {
     console.log('Hello, ' + name + '!')
 }

 greet('Andrew') // will print: Hello, Andrew!
 greet() // will print: Hello, User!