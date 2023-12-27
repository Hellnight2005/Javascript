class User{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`login user ${this.username}`);
    }
    static Id(){
        return `1234`
    }
}

const abhijeet = new User("abghijeet")
// console.log(abhijeet.Id());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logme()
// console.log(iphone.Id());