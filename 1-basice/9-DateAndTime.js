
let myDate = new Date()
console.log(myDate.toString())   // Universal Time
console.log(myDate.toDateString()) // Standard Date
console.log(myDate.toLocaleDateString()) // local Date
console.log(typeof myDate)

// let myCurrentDate = new Date( 2023, 0 ,23)
let myCurrentDate = new Date( 2023, 0 ,23, 5, 8, 23)

let myCurrentDate = new Date("12-25-2022" )
//console.log(myCurrentDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCurrentDate.getTime())

console.log(Date.now()) // Current Date in millisecond
console.log(Math.floor(Date.now()/1000)) 

let NewDate = new Date()
console.log(NewDate)  // For More Information About Date You Can Add With THe Help of (NewDate.get------())
// Add Youradd your desire output

// [toLocaleDateString()] is very interesting function we can add objects and our default values also
NewDate.toLocaleDateString('default'{
    weekday: "long",
    
})