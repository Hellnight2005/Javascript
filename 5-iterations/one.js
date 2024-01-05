// for 
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
       // console.log("5 is best number ");
    } else {
      
    }
    console.log(element);
    
}
for (let i = 1; i <=10; i++) {
    //console.log(`Outer loop ${i}`)
    for (let j = 1; j<=10; j++) {
        //console.log(`Inner loop ${j}`);
        //console.log(`${i} X ${j} = ${i*j} `);
    }   
}

// break and continue
for (let index = 0; index <=20; index++) {
    if (index == 15){
        console.log(`15 number is Detected `);
        break
    }
    console.log(`value of i is ${index}`);
    

}


for (let index = 0; index <=20; index++) {
    if (index == 15){
        console.log(`15 number is Detected `);
        continue
    }
    console.log(`value of i is ${index}`);
    

}
