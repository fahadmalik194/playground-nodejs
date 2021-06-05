// //callback functions: Asynchronous Example
// //setTimeout is not JS function its a Node API
// setTimeout( () =>{
//     console.log('2 seconds has passed!')
// }, 2000)

// //callback function: Synchronous Example
// //filter is a JS function
// const names = ['Andrew', 'Jen', 'Mike']
// const shortNames = names.filter((name)=>{
//     return name.length <= 4
// })
// console.log(shortNames)

// //the problem: using return in Asychronous Environment:
// //this will output undefined because: geoCode() function return undefined, because setTimeout will call when the call stack is empty!
// const geoCode = (address, callback) => {
//     setTimeout(() => { 
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }

//         return data

//     }, 2000)
// }

// const data = geoCode('Lahore')
// console.log(data)

// //to solve problem: use callback function in Asynchronous Environment:
// //to solve the above problem: we call that callback function in arguments of the function(geocode) that we created:
// const geoCode = (address, callback) => {
//     setTimeout(() => { 
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }

//         callback(data)

//     }, 2000)
// }

// geoCode('Lahore', (data) => {
//     console.log(data)
// })


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!


// const add = (x, y, callback) => {
//     setTimeout(() => {
//         const result = x + y
//         callback(result)
//     }, 2000)
// }

// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })

const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error', undefined)
        callback(undefined, [1,4,7])
    }, 2000)
}

doWorkCallback((error, result) => {
    if(error){
        return console.log(error)
    }
    console.log(result)
})