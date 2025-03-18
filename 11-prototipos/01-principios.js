// const user = {
//     nombre: 'Mike',
//     apellido: 'Vera',
//     getNombreCompleto() {
//         return [this.nombre, this.apellido].join(' ');
//     }
// }

// console.log(user.getNombreCompleto()); // Mike Vera

/**
 * 4 prilares de la programación orientada a objetos
 * - ENCAPSULACIÓN
 * - ABSTRACCIÓN
 * - HERENCIA
 * - POLIMORFISMO
 */

// ENCAPSULACIÓN
const user = {
    nombre: 'Mike',
    apellido: 'Vera',
    getNombreCompleto() {
        return [this.nombre, this.apellido].join(' ');
    }
}
console.log(user.getNombreCompleto());

// ABSTRACCIÓN
const user1 = new User();
user1.password = 'ChanchitoFeliz';
user1.save();

// HERENCIA
// Se utilizan funciones constructoras (Class)

// POLIMORFISMO
function validarEntidad(entidad){
    //...
    entidad.save();
}