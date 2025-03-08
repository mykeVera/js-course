const usuarios = [
  { edad: 17, nombre: "Nico", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "free" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
];

const users = [
  { age: 22, name: "Michael", membership: "premium" },
  { age: 27, name: "Kevin", membership: "free" },
  { age: 29, name: "Happy pig", membership: "free" },
];

// Unificar las estructuras de usuarios y users
const usersEspanol = users.map(u =>({
    edad: u.age,
    nombre: u.name,
    plan: u.membership
}));

// Fusionar los array
const todos = [...usuarios, ...usersEspanol];

// Ordenar por edad
todos.sort((a, b) => b.edad - a.edad);

// Crear pantilla HTML
const lista = todos.map((u) => 
    `<li>Nombre: ${u.nombre}, Edad: ${u.edad}</li>`);

// <li>Nombre: name, Edad: age</li>
const html = `
<ul>
  ${lista.join(`
  `)}
</ul>
`;

// Imprimir la lista en consola
console.log(html);