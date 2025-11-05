// function User(name){
//     this.name = name;
//     this.instancia = function(){}
// }

// User.prototype.login = function(){
//     console.log(`Hola mundo!`);
// }


class User {
    constructor(name){
        this.name = name;
        this.instancia = function(){}
    }

    activo = true;

    logout = () => {
        console.log(`Logout`);
    }

    login(){
        console.log(`Hola mundo!`);
    }

}

const u = new User('Juan');
console.log(u);