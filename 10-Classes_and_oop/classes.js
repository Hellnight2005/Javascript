class user{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptpassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return ` ${this.username.toUpperCase()}`
    }
}

const chai = new user("Abhijeet", "abhijeet2005", 9820530968)
console.log(chai.encryptpassword());
console.log(chai.changeusername());

// behinde the scene work with out class 

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.changeusername = function(){
    return ` ${this.username.toUpperCase()}`
}
User.prototype.encryptpassword = function(){
    return `${this.password}abc`
}
    
const tea = new User("tea", "abhijeet2005", 9820530968)
console.log(tea.encryptpassword());
console.log(tea.changeusername());