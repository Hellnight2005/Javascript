/*
const score = 400
const balance = new Number(1256)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.9856
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'));

//                Maths                      
console.log(Math);
console.log(Math.abs(-56));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.pow(2,3));
console.log(Math.max(1,2,3,4,5,6));
console.log(Math.min(1,2,3,4,5,6
*/    
let game = ((Math.random()*10)+1);  // Random function
console.log(game.toFixed())         // that generat 1 - 10 value

// if you have max and min term the how to apply random function between them
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min +1)) + min)
 // here first random function as call the ,* with (max - min + 1) to get randon number between max and min term 
 // then we add with min beacuse to get at least min term


