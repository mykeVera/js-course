// Dentro de un objeto, THIS hace referencia a un objeto
const user = {
    name: 'Nicolas',
    login(){
        console.log(this);
    }
};
user.logout = function logout()  {
    console.log(this);
}
// user.logout();

// En una función,  THIS hace referencia al objeto WINDOW o GLOBAL

// function log(){
//     console.log(this);
// }
// log();

function Log(mensaje){
    this.mensaje =mensaje;
    console.log(this);
}

/**
 * se crea un objeto literal
 * se vincula este objeto a this
 * se vincula el prototipo
 * si no retorna nada, entonces retorna this
 */
const l = new Log('Hola mundo');


// Si se usa NEW hace referencia al objeto que sera creado




