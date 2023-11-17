let score ="33abcd"
 
console.log(typeof score);
console.log(typeof (score));
let valueInmunber = Number(score)
console.log(typeof valueInmunber);
console.log(valueInmunber);

let isLoggedIn = 1
let booleanvalue =Boolean(isLoggedIn)
console.log(booleanvalue);
console.log(typeof booleanvalue);  

/* "33"=>33
    "33abs"=>NaN
    true=>1; false=>0
    " "=>Fasle
    "Anything"=>True
*/

let number = 55
let stringnumber = String(number)
console.log(stringnumber);
console.log(typeof stringnumber);
  


//    operation   //
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3) // []**[] that mean power of that number //
console.log(2%5) // Here % mean remending //
console.log(2/2)


let str1 ="Hello"  // This is add of two string //
let str2 ="World"
console.log( str1 + str2 )

console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2) // Her what ever was first type tha only taken //
console.log("1"+(2+3)+3)
// her (2+3) condire as int and other are a string // 

console.log(+true) //This is not gate of js  
console.log(+"")//

let game=100   // This is incremint of js
game++;
console.log(game)