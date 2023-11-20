const marvel_Hero = [ "Thor", "Ironman ", "Spiderman"]
const dc = [ "Superman", "flash", "Batman"]

// mearge of two Array 
marvel_Hero.push(dc)
console.log(marvel_Hero)
console.log(marvel_Hero[3][1])

 
let Hero = marvel_Hero.concat(dc)
console.log(Hero)

const all_Hero = [...marvel_Hero,...dc]
console.log(all_Hero)

// This will creat a single Array if you given muplity Array
const another_array = [1,2,3,[4,5,6],7,[4,5]]
const other_Array = another_array.flat(Infinity)
console.log(other_Array)



console.log(Array.isArray("Abhijeet"))
// this will creat a Array of given number
console.log(Array.from("Abhijeet"))

// instering case in Array 
console.log(Array.isArray({name:"Abhijeet"}))


// How to convert given Data in Array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))