// Function is object 

function math(num){
    for (let i = 0; i < 12; i++) {
        var table
        table = console.log(`${num} X ${i} = ${num*i}`)
    }
    return table
}
math.power = 2

// console.log(math(2));
// console.log(math.prototype);
// console.log(math.power);

function createduser(username, score){
    this.username = username,
    this.score = score
}
createduser.prototype.increment = function(num){
    this.score+=num
}
createduser.prototype.printme = function(){
    console.log(`price is ${this.score}`);
}
const Chai = new createduser("Chai", 20)
const tea = createduser("tea", 200)

Chai.increment(5)
Chai.printme()
