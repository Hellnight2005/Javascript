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