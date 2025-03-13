let afuera = "estoy afuera";

function alcance() {
  console.log(afuera);
  function saludo() {}
  afuera = "estoy dentro";
  var vieja = "ya no usar";
  let variable = "Hola mundo";
  const constante = "Hola mundo!";
}

console.log(afuera);
alcance();

console.log(afuera);
