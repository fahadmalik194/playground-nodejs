////Standard Function:
// const square = function(x){
//     return x * x
// }

////Arrow Function:
// const square = (x) => {
//     return x * x
// }

////Short Hand Notation of an Arrow Function (When having only one line return):
// const square = (x) => x * x

//// Declaring object Method with Standard Syntax
// const event = {
//     name: 'Birthday Party',
//     printGuestList: function(){
//         console.log('Guest List for ' + this.name)
//     }
// }

//// Declaring object Method with Arrow Function Syntax:
//// But the problem is: Arrow functions are not good to define objects methods
//// we cannot use this.name in arrow functions it return (Undefined)
// const event = {
//     name: 'Birthday Party',
//     printGuestList: () => {
//         console.log('Guest List for ' + this.name)
//     }
// }

//This is the standard sytax of es6 to define an object method
// const event = {
//     name: 'Birthday Party',
//     printGuestList() {
//         console.log('Guest List for ' + this.name)
//     }
// }

////we getting an error using this: this.name in for each have its own reference thats why its dont know this function of its parent:
// const event = {
//     name: 'Birthday Party',
//     guests: ['Andrew', 'Gen', 'Mike'],
//     printGuestList() {
//         console.log('Guest List for ' + this.name)

//         this.guests.forEach(function(guest){
//             console.log(guest + ' is attending ' + this.name)
//         })
//     }
// }

////But using an arrow function in for each solved the above problem, because
////Arrow functions dont have a reference of their own so they get the value of this what ever the value of its parent contains:
const event = {
    name: 'Birthday Party',
    guests: ['Andrew', 'Gen', 'Mike'],
    printGuestList() {
        console.log('Guest List for ' + this.name)

        this.guests.forEach((guest)=>{
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()