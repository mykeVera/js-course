const usuarios = [
  { edad: 17, nombre: "Nico", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "premium" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
  { edad: 25, nombre: "Felipe", plan: "gold" },
];

// function cuantosPremium(usrs) {
//   return usrs.reduce((acc, el) => (el.plan != "free" ? acc + 1 : acc), 0);
// }

// function cuantosMayores(usrs) {
//     return usrs.reduce((acc, el) => (el.edad > 17 ? acc + 1 : acc), 0);
// }

function cuantosPremium(usrs) {
  return usrs.filter(u => u.plan != "free").length;
}

function cuantosMayores(usrs) {
  return usrs.filter(u => u.edad > 17).length;
}

console.log(cuantosPremium(usuarios)); // 1
console.log(cuantosMayores(usuarios)); // 2
