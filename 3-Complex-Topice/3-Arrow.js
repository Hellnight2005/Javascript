const User = {
    Username: "Abhijeet",
    Price: 99,

    welcomeMessage: function(){
        console.log(`${this.Username}, Welcome to Website`);
        console.log(this);
    }

}
User.welcomeMessage()
User.Username =  "Yash"
User.welcomeMessage()

//console.log(this);

// If you print this in Function 
function On(){
    console.log(this);
}
//On()


// This is Arrow Function 
const Ontwo = (num1, num2) => {
    return num1 + num2
}
console.log(Ontwo(5, 8))


// This Shortcut Method for Above Example
const AddtwoNumber = (num1, num2) => (num1 + num2)
console.log(AddtwoNumber(5, 8));

