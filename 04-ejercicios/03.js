/**
 * indice validar que no sea menor a cero y que el elemento exista
 * en el array
 * Reglas:
 * - El indice no puede ser menor a cero
 * - El elemento tiene que existir en el array
 */
function getByIdx(arr, idx) {
    if (idx < 0 || idx > (arr.length-1)){
        return 'El indice no existe';
    } else {
        return arr[idx];
    } 
}

let resultado = getByIdx(['a', 'b', 'c'], 1);
console.log(resultado);