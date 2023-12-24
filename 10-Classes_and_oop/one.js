const user = {
    userName: "Abhijeet",
    LoginCount: 8,
    SingIn: true,


    getUserDetails:function(){
        // console.log("Got User Details from Databaser");
        // this help to get data from outside scope 
        console.log(`Got User Details from Databaser user Name is ${this.userName}`);
        // it will the user(object) 
        console.log(this);
       
    }
}

console.log(user.LoginCount);
// console.log(user.getUserDetails());
// in this it is allready out side the scope so it has no idea from were to get value 
// so it show itslef as empty 
// console.log(this);


//                                      Constructor function 
// how to make a Constructor function 
// eg :-
//    const date = new date()

function User(userName,LoginCount,SingIn){
    this.userName = userName;
    this.LoginCount = LoginCount;
    this.SingIn = SingIn;
    this.greeting =function(){
        console.log(`welcom ${this.userName}`);
    }
    // it can use or  not it is default use 
    return this
}

const userone= new User("Abhijeet",15,true)
const usertwo = new User("Yash",20,true)
console.log(userone.constructor);
console.log(userone instanceof User );

// console.log(usertwo);

// when you use new keyword it created a empty object 
// Constructor function is call by new 
// Constructor function collected all argument of function and give to user 
// it will display in form of  parameter :'Arrgument'