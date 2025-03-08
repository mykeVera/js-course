/**
 * Crear algoritmo que devuelva
 * el precio del producto
 * más impuestos
 */

function precioCompleto(precio, impuesto) {
    return precio + (precio * impuesto); // suma del precio del producto y del impuesto al mismo tiempo.
}

let resultado = precioCompleto(19.90, 0.15);
console.log(resultado);