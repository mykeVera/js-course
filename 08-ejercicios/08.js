const usuarios = [
  { edad: 17, nombre: "Nico", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "free" },
  { edad: 25, nombre: "Felipe", plan: "gold" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
];

// Obtener los usuarios de pago (premium y gold)
const pagos = usuarios.filter((u) => u.plan !== "free");

// Ordenar de mayor a menor de edad
pagos.sort((a, b) => b.edad - a.edad);

// Devolver el nombre del usuario
const lista = pagos.map((u) => `<li>${u.nombre}</li>`);

// Crear una plantilla HTML
const html = `
<ul>
  ${lista.join(`
  `)}
</ul>
`;

// Imprimirla en consola
console.log(html);

// <ul>
//   <li>Felipe</li>
//   <li>Nico</li>
// </ul>
