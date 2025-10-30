

function User(){
    this.name = 'Hola Mundo';
}

function Product(){
    this.name = 'Producto ';
}

function Entidad(){}
Entidad.prototype.save = function(){
    console.log('Guardando...', this.name);
}
Entidad.prototype.validate = function(){
    console.log('Validando...', this.name);
}

// Formas antiguas de como extender prototipos
// User.prototype = Entidad.prototype;
// User.prototype.constructor = User;
// User.prototype = Object.create(Entidad.prototype);
// User.prototype.constructor = User;

// Forma moderna desde ECMA SCRIPT 6
Object.setPrototypeOf(User.prototype, Entidad.prototype);
Object.setPrototypeOf(Product.prototype, Entidad.prototype);

const user = new User();
console.log(user);