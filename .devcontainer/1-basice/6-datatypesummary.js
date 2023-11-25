/* 
Primitive :-                  
    String                          
    Number                          
    Boolean                         
    Null
    Undefined
    Symbol
    BigInt
*/
const score = 100
const scorevalue = 100.3

const isLoggeIn = true
const outsideTemp = null
let UserEmailId;

const Id = Symbol('123')
const anotherId = Symbol('123')
console.log(Id === anotherId)
/*
Non Primitive :-
Array
Objects
 Functions

 */
// How set a Array//
const Fruite = ["Apple","Banana","orange","watermelon"]
console.log(typeof Fruite)
// type of Array is [Object]

// How to set Object
let myObj={
    name: "Abhijeet",
    age : 18,
}
console.log(typeof myObj)
// type of object is [Object]

// How to write a function
const myfunction=function(){
            console.log("Hello Usere")
}
console.log(typeof myfunction)
// type of function is [function]



                    //  Memory//
// stack (primitive), Heap (Non-primitive)
//   call by value      call by reference

let Gamename = "HellNight"
let anotherGamename = Gamename
anotherGamename = "Headmade"
console.log(Gamename)
console.log(anotherGamename)

let User ={
    Email : "User123@gmail.com",
    upi : "9852314658@com",
}

let User1 = User
User1.Email = "User456@gmail.com"

console.log(User.Email)
console.log(User1.Email)


