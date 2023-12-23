
const coding = ["js", "python", "java", "cpp"]

const Values =coding.forEach(  (item) => {
    //console.log(item);
    return item
})

//console.log(Values



//   it use for return value :
const MyNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const NewNum = MyNum.filter( (num) => num > 8 )
console.log(NewNum);
// if you use scope you should mention return statement
// Eg :
/*  const MyNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const NewNum = MyNum.filter( (num) => {
    return num >8
} )
console.log(NewNum);
 */


// Array use in for each 
const newNum = []
MyNum.forEach( (num) => {
    if(num > 4){
        newNum.push(num)
    }
} )
console.log(newNum);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
// How Filter use
let UserBooks = books.filter(  (bk) =>  bk.genre === 'History' )
// use scope
 UserBooks = books.filter(  (bk) => { 
    return bk.publish >= 1995 &&  bk.genre === "History"
})

//console.log(UserBooks);


//  how to use map
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//const newnums = myNums.map( (num) => num + 20 )
const newnums = myNums
                        .map( (num) => num * 10)
                        .map( (num) => num + 1)
                        .filter( (num) => num >= 30)
console.log(newnums);