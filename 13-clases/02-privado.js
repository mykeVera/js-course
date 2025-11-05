// function User(a){
//     let name = a; // variable privada
//     this.getName = function() { return name; }
// }

class User {
    #name; // variable privada

    constructor(name) {
        this.#name = name;
    }

    #logger() { // solo se accede desde dentro de la clase
        console.log("Desde el metodo privado");
    }

    getName() {
        this.#logger(); // aqui
        return this.#name;
    }
}

const u = new User("Juan");

console.log(u.getName()); // Juan
// console.log(u.#name); // Error: no se puede acceder a la variable privada fuera de la clase
console.log(u.name); // Undefined
// u['#name'] = "Pedro";
console.log(u['#name']); // Undefined


