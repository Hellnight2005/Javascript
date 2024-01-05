class Usere {
    constructor(Name,Email){
        this.Email = Email,
        this.Name = Name
    }
    get Email(){
        // this value is to use show to other 
        return this._Email.toLowerCase()
    }
    set Email(value){
        // here the value is use to stored in database 
        this._Email = value.toUpperCase()
        console.log(value);
    }
}

const abhijeet = new Usere("Abhijeet","Abhijeet@gmail.com")
console.log(abhijeet.Email);