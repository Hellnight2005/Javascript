function setusername(username){
    this.username = username
    
}

function createduser(username,email,password){
    setusername.call(this, username),
    this.email = email,
    this.password = password
}


const chai =new createduser("abhijeet", "abhijeet2005@gmail.com",9820530968)
console.log(chai);