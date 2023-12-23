  //      {} => Scope 
  //    Scope is divide into two term [Goble Scope] And [Local Socpe]

  if(true){
    // inside value is local Value 
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER:", a);
  }
  // Outside Value is Goble Value 
                                         // var is not follow the Scope
  //console.log(a);
  //console.log(b);
  //console.log(c);




  //            Nested Scope
function one(){
    const UserName =  "Abhijeet"

    function two (){
        const Website = "Youtube"
        console.log(UserName);  // you can use goble variable in local variable
    }
    // console.log(Website); but You can use local variable into gobale variable 
    two()
}
//one()








