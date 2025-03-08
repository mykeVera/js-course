/**
 * crear algoritmo que tome un array de
 * objetos y devueva un array de pares
 * */

let array = [
  {
    id: 1,
    name: "Nicolas",
  },
  {
    id: 2,
    name: "Maria",
  },
  {
    id: 3,
    name: "Juan",
  },
];

function toPairs(array) {
    let pairs = []
    for (const object of array) {
        pairs.push([object.id, object]);
    }
    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);
