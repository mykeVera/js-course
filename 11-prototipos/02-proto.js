function User(){
    this.name = 'Hola mundo';
    // método de instancia
    this.logger = function(){
        console.log('logueando...');
    }
}

// método de prototipo
User.prototype.login = function(){
    console.log('Iniciando Sesión', this.name);
    this.logger();
}

const user1 = new User();
const user2 = new User();
console.log(user1.login === user2.login); // false


User.prototype.toString = function(){
    console.log('Usuario:', this.name);
}
console.log(user1.login());


