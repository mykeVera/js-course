/**
 * crear algoritmo que devuelva
 * array de objetos en base a pares
 * */

let pairs = [
  [1, { name: "Nicolas" }],
  [2, { name: "Maria" }],
  [3, { name: "Juan" }],
];

// let array = [
//   {
//     id: 1,
//     name: "Nicolas",
//   },
//   {
//     id: 2,
//     name: "Maria",
//   },
//   {
//     id: 3,
//     name: "Juan",
//   },
// ];

function toCollection(array) {
  let collection = [];
  for (const e of array) {
    collection.push({ id: e[0], name: e[1].name });
  }
  return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);
