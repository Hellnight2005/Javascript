const UserEmail = "Ab@2005.ai"

if (UserEmail) {
    console.log("Got User name");
}else {
    console.log("Dont Have User name");
}

/*
falsy value 
false, 0, -0, BidInt 0n, "", null, undefinde, NaN

truthy value
true,  "0", 'false', "  ", [], (), function(){}
*/

// how to see object is empty or not 
const empytObject = {}

if (Object.keys(empytObject).length === 0) {
    console.log("Object is Empty")
} else {
    console.log("Object is not empty")
}



// nullish coalescing operatop : null, undefined
let valu1;
//valu1 = 5 ?? 45
//valu1= null ?? 456
//valu1 = undefined ?? 56
valu1 = null ?? 10 ?? 52
console.log(valu1);

// terniary operator 
// syntax = condition ? true : false

const price = 100
price <= 80 ? console.log("Less than 80") : console.log("More than 80");
