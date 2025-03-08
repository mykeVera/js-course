/**
 * Crear algoritmo que devuelva cantidad
 * de numero positivos de un array
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(array){
    let contador = 0;

    for (const numero of array) {
        if(numero > 0){
            contador++;
        }
    }

    return contador;
}

let numeros = cuantosPositivos(array);
console.log(numeros);