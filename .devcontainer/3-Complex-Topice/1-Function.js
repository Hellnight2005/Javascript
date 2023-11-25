function Saymyname(){
    console.log("A")
    console.log("B")
    console.log("H")
    console.log("I")
    console.log("J")
    console.log("E")
    console.log("E")
    console.log("T")
}

//Saymyname()

function AddTwoNumber(num1, num2){
    // (num1 , num2) are parement
   let result = num1 + num2  // you can also (return num1+num2)
   //console.log("Abhijeet")
   return result
}

const Result = AddTwoNumber(5, 5)
//console.log("Result :",Result)



function loginUserMessage(Username ="XYZ"){
    // Here if Syntax 
    if (Username === undefined){
        console.log("Please Enter a username ")
        return
    }
    return `${Username} is Logged In`
}

console.log(loginUserMessage("Abhijeet"))



// Here use Rest operated (...------)
function CalCulatedCartPrices(...num1){
    return num1
}

console.log(CalCulatedCartPrices(56, 5, 58, 265, 59));

//          Object in function 
const User = {
    UserName: "Abhijeet",
    Prices: 999
}
function HandleObject(AnyObject){
    console.log(`Username is ${AnyObject.UserName} is price is ${AnyObject. Prices}`);
}

HandleObject(User)
HandleObject({
    UserName: "Yash",
    Prices: 899
})


//      Array in function
const NewArray = [200, 400, 600]
function ReturnValue(GetArray){
    return GetArray[1]
}
console.log(ReturnValue(NewArray));





