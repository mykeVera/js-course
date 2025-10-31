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
 * - ENCAPSULACIÓN: Agrupar metodos y propiedades
 * - ABSTRACCIÓN: Esconder los detalles de implementación
 * - HERENCIA: Reutilización de código mediante clases
 * - POLIMORFISMO: Permitir que diferentes clases sean tratadas como instancias de la misma clase a través de una interfaz común
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