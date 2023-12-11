// for of

const arr = [1, 2, 3, 4, 5, 6]
for (const num of arr) {
   // console.log(num);
}

const greetings = "Hello sir"
for (const greet of greetings) {
    //console.log(`${greet}`);
}

// Maps
// unique value 
const map = new Map()
map.set('IN',  "India")
map.set('USA', "United States of America")

//console.log(map);

for (const [key,Value] of map) {
    //console.log(key, ':-',Value);
}


//---------------------------------------for in loop ----------------
// for of on object does'nt work
const Object1 = {
    game1: 'NFS',
    game2: 'coc',
    game3: 'Spiderman'
}
/*
for (const game of obje1) {
    console.log(game);
}*/

// for in loop 
for (const key in Object1) {
    //console.log(Object1[key]);
   // console.log(`${key} Name : ${Object1[key]}`);
}


// for in for Array
const Array1 = ["js", "Cpp", "py", "java", "rb"]
for (const key in Array1) {
    //console.log(Array1[key]);
}

// for in on map 
/*
for (const key in map) {
    console.log(key)
}*/

