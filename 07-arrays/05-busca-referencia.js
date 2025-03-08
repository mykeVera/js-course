const usuarios = [
  { id: 1, name: "Angel" },
  { id: 3, name: "Maria" },
];

// const resultado = usuarios.indexOf({id: 1, name: 'João'});

const resultado = usuarios.find((usuario) => usuario.name === "Angel");

console.log(resultado); // { id: 1, name: "Angel" }

const resultado2 = usuarios.findIndex((usuario) => usuario.name === "Angel");

console.log(resultado2); // 0
