// function Use(Email, Password){
//     this.Email = Email,
//     this.Password = Password
    
//     Object.defineProperty(this, 'Email', {
//         get: function(){
//             return this._Email.toUpperCase()
//             // return this._Email.toLowerCase();
//         },
//         set: function(value){
//             this._Email=value
//         }
//     })
// }

// const abhijeet = new Use("abhijeet2005@gmail.com", "chai")
// console.log(abhijeet.Email);

const  user = {
    _email: 'abhijeet2005@.com',
    _password: "chai",

   
    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(user)
console.log(tea.email);