/**
 * Crear algoritmo que devuelva número
 * menor y mayor de una array.
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(array){
    let menor = array[0];
    let mayor = array[0];

    for (const numero of array) {
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }

    return [menor,mayor];
}

let numeros = getMenorMayor(array);
console.log(numeros);
