const myArr = [0,1,2,3,5,8]

console.log(myArr[5])
console.log(myArr.length)

// Array Method 

myArr.push(10) // Add valu in Array
console.log(myArr)
myArr.pop() // Delet Value in Array
console.log(myArr)

myArr.unshift(12)  // Add Value in Start of Array

myArr.shift()  // Remove Start value of Array 

console.log(myArr.includes(9)) 
// to ensure the value given by the user are in the array or not
console.log(myArr.indexOf(8))
// to know the index value in array

const newArr = myArr.join()
// it's copy the value of other array and convert into string
console.log(typeof newArr)
console.log(myArr)

// slice , splice 
console.log("A ", myArr)
const myn1 = myArr.slice(1,4)
console.log(myn1)
// slice returns a piece of the array but it doesn't affect the original array.
console.log("B ", myArr)
const myn2 = myArr.splice(1,4)
console.log(myn2)
// splice changes the original array by removing, replacing, or adding values and returns the affected values.
console.log("c ", myArr)
