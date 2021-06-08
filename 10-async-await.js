console.log('Async/Await:')

const doWork = () => {

}
console.log(doWork())
//The above line of code prints: undefined in the cosole



const doWorkAsync = async () => {

}
console.log(doWorkAsync())
//The above line of code prints: promise { undefined } in the cosole



const doWorkAsyncStr = async () => {
    return "Fahad"
}
console.log(doWorkAsyncStr())
//The above line of code prints: promise { "Fahad" } in the cosole
//In this case the function don't return a string, its returns a promise and promise return a string



const doWorkAsyncStrTC = async () => {
    //throw new Error('Something went wrong') //If there is an error, that means the promise not resolved and rejected()
    return "Fahad" //If we return the string, that means the promise resolve()
}
doWorkAsyncStrTC().then((result) => {
    console.log("Result: ", result)
}).catch((e) => {
    console.log(e)
})
//Beacuse the above function doWorkAsyncStrTC() returning us a promise so we apply the then() and catch() to it 




//Now we find out how and what is Async, now the question is how it is usefull ????
//This brings us the other half which is Await Operator: we used in Aysnc Functions
//The ease that Aysnc/Await provides us is to handle the aysnchoronous code


//Aysnc/Await Example:
const add = (a, b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}
//Now we copy the function from previous 9-promises-chaining.js file and we dont change its code internally to use Aysnc/Await, we are going to call it by using Async/Await
//The point is that, mongooses provide us functions, that return promises so in order to use Aysnc/Await we are not going to change the mongoose libaray functions,
//we just use Aysnc/Await while calling them, the point is not change them, point is how you work with them or use them
//Below is the example:
//We use await with promise, like in this example we use await with add() becaues add() is returning a promise 
const doAdd = async () => {
    const sum = await add(1, 99)
    const sum2 = await add(sum, 50)
    const sum3 = await add(sum2, 3)
    return sum3
}

doAdd().then((result)=>{
    console.log("Result: ", result)
}).catch((e) => {
    console.log(e)
})
//Now by using Aysc/Await we handle asynchrounous programming in synchronous way, means the code is much simpler to understand rather than promises chaining
//Other Advantage of using Async/Await rather than promises chaining is: 
// add(1,1).then((sum) => {
//     console.log(sum)
//     return add(sum,4)
// }).then((sum2)=>{
//     console.log(sum2)
// }).catch((e) => {
//     console.log(e)
// })
//like in the above code example we are using promises chaining, now the problem is that i cant access (sum and sum2) const at a same time because of thier scope, 
//now if i want to use them in a same scope i have to save them in another const in a parent scope to handle them at once, which will make a lot of mess here but by using 
//Aysnc/Await we can use as much as we want in a very easy manner and can i write an understandable code, like we did above
//
//
//Now there is a little problem while using Aysnc/Await is that what if one of the three function call like we use above (add()) - rejects() sometimes
//How to handle that one ???
//
//
//To handle the above problem:
const adding = (a, b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(a < 0 || b < 0){
                return reject("Numbers must be non-negative")
            }
            resolve(a + b)
        }, 2000)
    })
}

const doAdding = async () => {
    const sum = await adding(1, 99)
    const sum2 = await adding(sum, 50)
    const sum3 = await adding(sum2, -3)
    return sum3
}

doAdding().then((result)=>{
    console.log("Result: ", result)
}).catch((e) => {
    console.log("Error: ", e)
})

console.log("This is Ascychronous Code, thats why i'm running first ;)")