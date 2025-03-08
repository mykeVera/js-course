function Usuario(nombre){
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario;
let user = new U('Mike');

console.log(user); 

// pasar funciona a otra como argumento
function of(Fn, arg){  
    return new Fn(arg);
}

let user1 = of(Usuario, 'Mike 2')
console.log(user1);

// retornar dentro de otras funciones
function returned(){
    return function(){
        console.log('Hola Mundo');
    }
}

let saludo = returned();
saludo();

/**
 * Las funciones son objeto de primera clase, es decir que tienen propiedades como los objetos que tambien podemos asignarlas a otras variables o constantes, ademas pordemos pasarlas como argumentos para otras funciones, tambien pueden ser retornadas en JS.
 */