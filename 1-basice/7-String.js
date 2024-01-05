const name = 'Abhijeet'
const Repocount = 5

console.log(name + Repocount)
console.log(`Hello my name is ${name} and my repo is ${Repocount} in github`)

const gameName = new String('Hellnight')
//  string stored in js
//    H : 0
//    e : 1
//    l : 2
//    l : 3
//    n : 4
//    i : 5
//    g : 6
//    h : 7
//    t : 8 
// this is not an Array itis a Object

console.log(gameName[0])                   // basic operation of String
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('n'))

const newString = gameName.substring(0,8)
console.log(newString)

// slice operation
const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

// trim operation 
const newString1 = "   Abhijeet   "         // use for space between test 
console.log(newString1)
console.log(newString1.trim())

// find or replace operation
const url = "https://Abhijeet.com/abhijeet%2005"
console.log(url.replace('%2005','---'))
console.log(url.includes('Shinde'))

// split operation
const String3 = "Abhijeet-2005-shinde"
console.log(String3.split('-'))
