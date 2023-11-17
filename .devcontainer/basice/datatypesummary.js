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