function User(){
    this.name = 'Hola mundo';
}

User.prototype.login = function(){
    console.log('Iniciando Sesión', this.name);
}

let user = new User();

// forma antigua para iterar las props de un object
// for (let prop in user){
//     if(user.hasOwnProperty('name'))
//     console.log(prop);
// }

// forma moderna
for (let prop in user){
    if(!user.hasOwnProperty(prop))
    console.log(prop);
}

console.log(Object.keys(user));