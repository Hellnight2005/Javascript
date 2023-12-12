const mynum = [1, 2, 3]
/*-
const myTotal = mynum.reduce(function(accumulator,currentValue) {
    console.log(`accumulator ${accumulator} and CurrentValue ${currentValue}`);
    return accumulator + currentValue
}, 1)
console.log(myTotal);
*/

const  myTotal = mynum.reduce( (accumulator,currentValue) => (accumulator + currentValue), 0)
//console.log(myTotal);

const ShoppingCartList = [
    {
        iteamName: "js Cource",
        price: 599
    },
    {
        iteamName: "Python Cource",
        price: 399
    }, 
    {
        iteamName: "java Cource",
        price: 699
    }
]

const cart = ShoppingCartList.reduce( (acc,item) => (acc + item.price), 0)
console.log(`Total price is ${cart}`);