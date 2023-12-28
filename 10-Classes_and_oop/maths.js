// const Descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(Descriptor);

// console.log(Math.PI);

const chai = {
    Name: "green chai",
    price: 120,
    isAvailable: true,

    OrderChai: function(){
        console.log("out of stock");
    }
}
// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai, "Name"));
Object.defineProperty(chai, 'Name',{
    writable: false,
    configurable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "Name")); 

for (let [key, value] of Object.entries(chai)) {
    if (typeof value != "function") {
        console.log(`${key} : ${value}`)
    }
}