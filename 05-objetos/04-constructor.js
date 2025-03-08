// { id: 1, recuperarClave: function(){} }
function Usuario() { // para constructors necesitas usar UpperCase por convención
    this.id = 1;
    this.recuperarClave = function() { // esto se convierte en un método, ya no es una función
        console.log('Recuperando clave...');
    };
}

let usuario = new Usuario(); /** Aqui ocurren 4 pasos
1. Se crea un objeto vacio en al aire { }.
2. Se vincula el prototipo con la funcion Usuario con el objeto vacio q se crea en el punto 1.
3. A THIS se le asigna el objeto vacio this = { }.
4. Si la función de Usuario no retorno nada, automaticamente retorno THIS.
*/

console.log(usuario);
