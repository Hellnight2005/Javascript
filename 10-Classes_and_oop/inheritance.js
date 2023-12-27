class user{
    constructor(username){
        this.username = username
    }
    logIn(){
        console.log(`${this.username} is login :`);
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password =password
    }

    addcourse(){
        console.log(`New course was add by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai2005@gmail.com", "123456")
chai.addcourse()
chai.logIn()
const masalachai = new user("MasalaChai")
masalachai.logIn()

