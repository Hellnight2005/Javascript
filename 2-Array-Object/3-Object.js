// object  literals 
const mysYM = Symbol("key 1")

const jsUser = {
    name: "Abhijeet",
    age: 18,
    location: "pune",
    [mysYM]: "myKey1", // Here mysYM is Use as Symbole
    mysYM: "myKey20",  // Here mysym is use as vrabile
    email: "hellnignt",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

console.log(jsUser.name)
console.log(jsUser["name"])
console.log(typeof jsUser[mysYM])
console.log(typeof jsUser.mysYM)  // but both type are String

jsUser.email = "Abhijeet@gmail.com" 
// From Above syntax you will change name of partucal thing
// it will not cionsider any change happen after that
jsUser.email = "Hellnight@gmail.com"
console.log(jsUser)
// Here we add function into object 
jsUser.greeting = function(){
    console.log("Hello Js user");

}
// Here we taken refrence from object 
jsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
    // {this.______} this we call value from object
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())

Object.freeze(jsUser)
// from this you will be freeze the object 
