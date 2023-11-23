// Singleton
//const appUser = new Object()

// NoSingleton
/*
const appUser = {}
appUser.Id = "123456"
appUser.name = "Abhijeet"
appUser.isLoggedIn = false

// console.log(appUser)
// Sub Object Syntax
const ReguralUser = {
    email: "Abhijeet@gmail.com",
    fullname: {
        Userfullname:{
            FirstName: "Abhijeet",
            SecondName: "Adhik",
            Surname: "Shinde"
        }
    }

}

//console.log(ReguralUser.fullname.Userfullname)

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}

//const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2)
// {}== Target , obj1,obj2== Source
console.log(obj3)
// this is technique known as spreading
let obj4 = {...obj1,...obj2}
console.log(obj4)


console.log(appUser)
console.log(Object.keys(appUser))
console.log(Object.values(appUser))
console.log(Object.entries(appUser))

console.log(appUser.hasOwnProperty('isLogged'))


*/

const Course = {
    Coursename: "Js In Hindi",
    CourseFees: "999",
    CourseTeacher: "Abhijeet"
}

const {CourseTeacher} = Course
console.log(CourseTeacher)